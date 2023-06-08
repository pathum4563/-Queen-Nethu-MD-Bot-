const axios = require("axios");
const cheerio = require("cheerio");

async function getApk(url) {
     return new Promise((resolve, reject) => {
          if (!/rexdlfile.com/g.test(url)) return resolve({ status: false, message: 'URL Yang Kamu Masukkan Tidak Valid' })
          axios.get(url)
               .then(({ data }) => {
                    const $ = cheerio.load(data)
                    const updated = $('li.dl-update > span:nth-child(2)').text()
                    const size = $('li.dl-size > span:nth-child(2)').text()
                    const version = $('li.dl-version > span:nth-child(2)').text()
                    let name = []
                    let url_download = []
                    let link_download = []
                    let promiss = []
                    $('li.download > span').get().map((rest) => {
                         name.push($(rest).text())
                    })
                    $('div#dlbox > ul.dl > a').get().map((rest) => {
                         url_download.push($(rest).attr('href'))
                    })
                    let download = []
                    for (let i = 0; i < name.length; i++) {
                         download.push({
                              name: name[i],
                              url_download: url_download[i]
                         })
                    }
                    for (let i = 0; i < url_download.length; i++) {
                         promiss.push(
                            link_download.push({ 
                                title: name[i],
                                url: url_download[i]
                            })
                         )
                    }
                    Promise.all(promiss).then(() => {
                         resolve({
                              title: url.split('=')[1].replace(/-/gi, ' '),
                              version: version,
                              size: size,
                              updated: updated,
                              download: link_download
                         })
                    })
               }).catch(reject)
     })
}

async function searchApk(apkname) {
     return new Promise((resolve, reject) => {
          axios.get(`https://rexdl.com/?s=${apkname}`)
               .then(({ data }) => {
                    const $ = cheerio.load(data)
                    let name = []
                    let url = []
                    let url_download = []
                    let thumb = []
                    let desc = []
                    $('h2.post-title > a').get().map((rest) => {
                         name.push($(rest).text())
                    })
                    $('div > div.post-thumbnail > a').get().map((rest) => {
                         url.push($(rest).attr('href'))
                    })
                    $('div > div.post-thumbnail > a').get().map((rest) => {
                         url_download.push('https://rexdlfile.com/index.php?id=' + $(rest).attr('href').split('/')[4].replace('.html', ''))
                    })
                    $('div > div.post-thumbnail > a > img').get().map((rest) => {
                         thumb.push($(rest).attr('data-src'))
                    })
                    $('div.entry.excerpt > p').get().map((rest) => {
                         desc.push($(rest).text())
                    })
                    let result = []
                    for (let i = 0; i < name.length; i++) {
                         result.push({
                              title: name[i],
                              thumb: thumb[i],
                              url: url[i],
                              url_download: url_download[i],
                              desc: desc[i]
                         })
                    }
                    resolve({
                        result: result
                    })
               }).catch(reject)
     })
}

module.exports = {
  searchApk,
  getApk
};
