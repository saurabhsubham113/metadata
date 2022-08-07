// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { parser } from "html-metadata-parser";
import puppeteer from "puppeteer";

const getImg = async (page) => {
  const img = await page.evaluate(() => {
    const ogImg = document.querySelector('meta[property="og:image"]');
    if (ogImg != null && ogImg.content.length > 0) {
      return ogImg.content;
    }
    const imgRelLink = document.querySelector('link[rel="image_src"]');
    if (imgRelLink != null && imgRelLink.href.length > 0) {
      return imgRelLink.href;
    }
    const twitterImg = document.querySelector('meta[name="twitter:image"]');
    if (twitterImg != null && twitterImg.content.length > 0) {
      return twitterImg.content;
    }
  });
  return img;
};

const getDescription = async (page) => {
  const description = await page.evaluate(() => {
    const ogDescription = document.querySelector(
      'meta[property="og:description"]'
    );
    if (ogDescription != null && ogDescription.content.length > 0) {
      return ogDescription.content;
    }
    const twitterDescription = document.querySelector(
      'meta[name="twitter:description"]'
    );
    if (twitterDescription != null && twitterDescription.content.length > 0) {
      return twitterDescription.content;
    }
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription != null && metaDescription.content.length > 0) {
      return metaDescription.content;
    }
  });
  return description;
};

const getTitle = async (page) => {
  const title = await page.evaluate(() => {
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle != null && ogTitle.content.length > 0) {
      return ogTitle.content;
    }
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle != null && twitterTitle.content.length > 0) {
      return twitterTitle.content;
    }
    const docTitle = document.title;
    if (docTitle != null && docTitle.length > 0) {
      return docTitle;
    }
  });
  return title;
};

export default async function handler(req, res) {
  try {
    if (req.method == "POST") {
      let { url } = req.body;
      if (!url) {
        return res.status(400).send({ error: "please provide a valid url" });
      }
      const browser = await puppeteer.launch({ headless: true });
      const page = await browser.newPage();
      await page.setViewport({
        width: 1024,
        height: 500,
      });
      await page.goto(url, {
        waitUntil: "networkidle2",
      });
      const ss = await page.screenshot({ encoding: "base64" });

      const pageTitle1 = await getTitle(page);

      const desc = await getDescription(page);

      const img = await getImg(page);
      // var metadata = await parser(url);
      res.status(200).json({
        success: true,
        title: pageTitle1,
        img: img || `data:image/png;base64,${ss}`,
        desc,
      });
    }
  } catch (error) {
    res.status(400).send({ success: false, error: error.message });
  }
}
