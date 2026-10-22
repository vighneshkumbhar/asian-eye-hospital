import imageUrlBuilder from "@sanity/image-url";
import { client } from "./sanity.client";

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  if (typeof source === "string") {
    return { url: () => source };
  }
  if (!source) {
    return { url: () => "https://www.asianeyehospital.com/images/logo.png" };
  }
  try {
    return builder.image(source);
  } catch (error) {
    return { url: () => "https://www.asianeyehospital.com/images/logo.png" };
  }
}
