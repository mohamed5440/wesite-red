document.querySelector(".icon-menu").addEventListener('click', ()=> {
    document.querySelector(".links").classList.toggle("active");
    });


       // Start Dark Mode
       function toggleDarkMode() {
        var body = document.body;
        body.classList.toggle("dark-mode");
      
        var icon = document.getElementById("darkModeIcon");
        icon.classList.toggle("dark-mode");
      
        var isDarkMode = body.classList.contains("dark-mode");
        localStorage.setItem("darkMode", isDarkMode);
      }
      
      // تعيين الوضع الداكن بناءً على حالة التخزين المحلية عند تحميل الصفحة
      var storedDarkMode = localStorage.getItem("darkMode");
      if (storedDarkMode === "true") {
        document.body.classList.add("dark-mode");
        var icon = document.getElementById("darkModeIcon");
        icon.classList.add("dark-mode");
      }