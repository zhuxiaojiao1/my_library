// 复制文本
export const copyText = (value: string) => {
  const copy = navigator.clipboard;
  copy
    .writeText(value)
    .then(() => {
      console.log("复制成功");
    })
    .catch((err) => {
      console.log("复制失败", err);
    });
};
