(function($, window) {
  $(function() {
    // この中に処理を書きます
    
    //1.jQueryオブジェクトを削除するメソッドを調べ、<h2>を非表示(hide)ではなく、削除してみましょう。
    $('h2').remove();

    //2.#indexにtext()メソッドとhtml()メソッド(ともにパラメータ無し)を実行して、その違いについて比べてみましょう。
    //text()メソッド
    var text = $('#index').text();
    alert(text);
    //出力結果 #indexのliの情報をテキストとして出力

    //html()メソッド
    var html = $('#index').html();
    alert(html);
    //出力結果 #indexのliの情報をHTMLの要素ごと出力

    //3.子要素を追加するappendというメソッドについて調べ、ul#indexの最後に<li>メソッド</li>を追加してみましょう。
    $("#index").append("<li>メゾット</li>");

    //4.ul#indexの子要素<li>それぞれ文字列の長さをalertしてみましょう。
    $('#index').find('li').each(function() {
      //alert($(this).text().length);
      //4.でalertではなく、各文字列の最後にその長さを追加してみましょう。
      //例：jQueryのはじめ方[11文字]
      var length = ($(this).text().length);
      $(this).append("[");
      $(this).append(length);
      $(this).append("文字");
      $(this).append("]");
    });
  });
})(jQuery, window);
