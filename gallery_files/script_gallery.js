$(function() {
	var box = [];
	$('ul#grid li').each(function() {
			box.push($(this).html());
	});
	box.sort(function() {
			return Math.random() - Math.random();
	});
	$('ul#grid li').empty();
	
	var i = 0;
	$('ul#grid li').each(function() {
			$(this).append(box[i]);
			i++;
	});
});

 //ロード画面設定_______________________________________________________________________________
 //____________________________________________________________________________________________
 window.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.lazy-load');
    let loadedImages = 0;

    images.forEach(function(image) {
        image.onload = function() {
            loadedImages++;
            image.classList.add('show');
            if (loadedImages === images.length) {
                // ロード画面をフェードアウトさせる
                const loading = document.getElementById('loading');
                loading.style.opacity = '0';

                // フェードアウトが完了したらロード画面を非表示にする
                setTimeout(function() {
                    loading.style.display = 'none';
                }, 500); // フェードアウト時間と同じタイミングで
            }
        };

        if (image.complete) {
            image.onload();
        }
    });

    document.getElementById('loading').style.display = 'flex';
});