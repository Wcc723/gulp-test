var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	coffee = require('gulp-coffee');

gulp.task('coffee', function() { //‘coffee'是排程名稱，可自定
	gulp.src('./app/coffeescripts/*.coffee') //來源檔案
		.pipe(coffee()) //編譯
		.pipe(concat('main.js')) //合併成一隻
		.pipe(uglify()) //壓縮、醜化
		.pipe(gulp.dest('./app/assets/js')) //輸出位置
});

gulp.task('default', ['coffee']);