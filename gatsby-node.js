const wrapper = promise =>
  promise.then(result => {
    if (result.errors) {
      throw result.errors
    }
    return result
  })

async function onCreateNode({ node, actions }) {
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
}
exports.onCreateNode = onCreateNode


// You can delete this file if you're not using it
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const defaultTemplate = require.resolve('./src/components/index.js')
  // const albumTemplate = require.resolve('./src/components/album.js')
  // const slugify = require('slugify');

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

  // query.data.allLastfmAlbum.edges.map(album => {
  //   const slug = slugify(`${album.node.name}_${album.node.artist.name}`).toLowerCase();
  //   createPage({
  //     path: `/album/${slug}`,
  //     component: albumTemplate,
  //     context: {
  //       album: album.node,
  //     }
  //   })
  // })

  // generate index

  createPage({
    path: "/",
    component: defaultTemplate,
  });
}