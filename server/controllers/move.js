
// 搜索
async function search (ctx, next) {
  console.log(ctx.request);

  const body = ctx.request.body

  ctx.state.data = ctx.request;
}

module.exports = {
  search
}