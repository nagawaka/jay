// const wrapper = promise =>
//   promise.then(result => {
//     if (result.errors) {
//       throw result.errors
//     }
//     return result
//   })

async function onCreateNode({ node, actions }) {
  // only log for nodes of mediaType `text/yaml`
  if (node.internal.type !== `LastfmTrack`) {
    return
  }

  const img = node.image[node.image.length - 1];

  if (img.text == 'https://lastfm-img2.akamaized.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png') {
    const { createNode, createNodeField, deleteNode } = actions;
    createNodeField({
      node,
      name: 'show',
      value: false
    })
  }

  // console.log(node);

  // const content = await loadNodeContent(node)
  // const parsedContent = jsYaml.load(content)
}
exports.onCreateNode = onCreateNode


// You can delete this file if you're not using it
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const defaultTemplate = require.resolve('./src/components/index.js')

  // const query = await wrapper(graphql(`
  //   query {
  //     allLastfmAlbum {
  //       edges {
  //         node {
  //           id
  //           name
  //           mbid
  //           artist {
  //             id
  //             name
  //           }
  //           tracks {
  //             image {
  //               text
  //               size
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `))

  // const data = query.data.allLastfmAlbum.edges;

  // generate index

  createPage({
    path: "/",
    component: defaultTemplate,
  });
}