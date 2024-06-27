document.addEventListener("DOMContentLoaded", function () {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const svg = d3
    .select("svg")
    .attr("width", width)
    .attr("height", height)
    .call(
      d3.zoom().on("zoom", function (event) {
        svg.attr("transform", event.transform);
      })
    )
    .append("g");

  const treeLayout = d3.tree().size([height, width - 160]);

  let i = 0;

  d3.json("transformed-traffic-sources.json").then((data) => {
    const root = d3.hierarchy(data, (d) => d.children);

    root.x0 = height / 2;
    root.y0 = 0;

    root.children.forEach((d) => collapse(d, 0));

    update(root);

    function collapse(d, depth) {
      if (d.children) {
        if (depth >= 1) {
          d._children = d.children;
          d._children.forEach((child) => collapse(child, depth + 1));
          d.children = null;
        } else {
          d.children.forEach((child) => collapse(child, depth + 1));
        }
      }
    }

    function update(source) {
      const treeData = treeLayout(root);

      const nodes = treeData.descendants().reverse();
      const links = treeData.links();

      nodes.forEach((d) => (d.y = d.depth * 180));

      const node = svg
        .selectAll("g.node")
        .data(nodes, (d) => d.id || (d.id = ++i));

      const nodeEnter = node
        .enter()
        .append("g")
        .attr("class", "node")
        .attr("transform", (d) => `translate(${source.y0},${source.x0})`)
        .on("click", click);

      nodeEnter
        .append("circle")
        .attr("r", 1e-6)
        .style("fill", (d) => (d._children ? "#555" : "#999"));

      nodeEnter
        .append("text")
        .attr("dy", ".35em")
        .attr("x", (d) => (d.children || d._children ? -13 : 13))
        .attr("text-anchor", (d) =>
          d.children || d._children ? "end" : "start"
        )
        .text((d) => d.data.name);

      const nodeUpdate = nodeEnter.merge(node);

      nodeUpdate
        .transition()
        .duration(750)
        .attr("transform", (d) => `translate(${d.y},${d.x})`);

      nodeUpdate
        .select("circle")
        .attr("r", 10)
        .style("fill", (d) => (d._children ? "#555" : "#999"));

      nodeUpdate.select("text").style("fill-opacity", 1);

      const nodeExit = node
        .exit()
        .transition()
        .duration(750)
        .attr("transform", (d) => `translate(${source.y},${source.x})`)
        .remove();

      nodeExit.select("circle").attr("r", 1e-6);

      nodeExit.select("text").style("fill-opacity", 1e-6);

      const link = svg.selectAll("path.link").data(links, (d) => d.target.id);

      const linkEnter = link
        .enter()
        .insert("path", "g")
        .attr("class", "link")
        .attr("d", (d) => {
          const o = { x: source.x0, y: source.y0 };
          return diagonal(o, o);
        });

      const linkUpdate = linkEnter.merge(link);

      linkUpdate
        .transition()
        .duration(750)
        .attr("d", (d) => diagonal(d.source, d.target));

      const linkExit = link
        .exit()
        .transition()
        .duration(750)
        .attr("d", (d) => {
          const o = { x: source.x, y: source.y };
          return diagonal(o, o);
        })
        .remove();

      nodes.forEach((d) => {
        d.x0 = d.x;
        d.y0 = d.y;
      });

      function diagonal(s, d) {
        return `M${s.y},${s.x}
                          C${(s.y + d.y) / 2},${s.x}
                           ${(s.y + d.y) / 2},${d.x}
                           ${d.y},${d.x}`;
      }

      function click(event, d) {
        if (d.children) {
          d._children = d.children;
          d.children = null;
        } else {
          d.children = d._children;
          d._children = null;
        }
        update(d);
      }
    }
  });
});
