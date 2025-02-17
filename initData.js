<script src="https://telegram.org/js/telegram-web-app.js"></script>
<script>
  const tg = window.Telegram.WebApp;
  tg.expand(); // 自动全屏
  console.log('用户信息:', tg.initDataUnsafe);
</script>