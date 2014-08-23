var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	webserver = require('gulp-webserver'),
	coffee = require('gulp-coffee');

gulp.task('coffee', function() { //‘coffee'是排程名稱，可自定
	gulp.src('./app/coffeescripts/*.coffee') //來源檔案
		.pipe(coffee()) //編譯
		.pipe(concat('main.js')) //合併成一隻
		.pipe(uglify()) //壓縮、醜化
		.pipe(gulp.dest('./app/assets/js')) //輸出位置
});

gulp.task('webserver', function() {
  gulp.src('app') //起始目錄
    .pipe(webserver({
    	host: '0.0.0.0', //host設定'0.0.0.0'，就可以用內網檢視
    	port: 10000, //設定一個沒在使用的port
      livereload: true, //auto refresh
      open: true //執行gulp時自動開啟browser
    }));
});

gulp.task('watch', function () { //自定一個watch的排程名稱
  gulp.watch('./app/coffeescripts/*.coffee', ['coffee']); //監聽路徑，以及檔案變更後所執行的任務
});

gulp.task('default', ['coffee','webserver','watch']);

