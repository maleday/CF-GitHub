// functions/_middleware.js

export async function onRequest(context) {
  const url = new URL(context.request.url);

  // 拦截所有以 .pages.dev 结尾的域名
  // 注意：这会导致你无法访问 Cloudflare Pages 的预览链接（Preview URLs）
  if (url.hostname.endsWith(".pages.dev")) {
    
    // 直接返回 404 状态码
    return new Response("Not Found", {
      status: 404,
      statusText: "Not Found"
    });
  }

  // 如果是自定义域名，放行，正常显示网页
  return context.next();
}
