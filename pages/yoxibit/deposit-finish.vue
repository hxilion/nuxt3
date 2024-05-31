<template>
    <main class="flex-grow flex-1 overflow-x-hidden">
        <section class="bg-white" id="title">
            <div class="py-12 md:py-16 px-4 2xl:px-0 max-w-screen-xl mx-auto relative">
                <div class="overflow-x-scroll w-full hidden md:block">
                    <nav
                        class="w-full bg-grey-light rounded-md w-full absolute top-0 left-4 ml-5 mt-5 ml-4 mt-2 md:ml-5 md:mt-5 md:ml-0">
                        <ol class="flex items-center justify-start space-x-2 text-sm">
                            <li class="whitespace-nowrap"><a class="text-black underline" href="/yoxibit/home">ホーム</a>
                            </li>
                            <li>&gt;</li>
                            <li class="whitespace-nowrap">購入事前申請</li>
                        </ol>
                    </nav>
                </div>
                <div class="text-center">
                    <h2 class="font-bold tracking-widest mb-1 text-2xl md:text-4xl">購入事前申請</h2>
                    <p class="text-primary font-bold tracking-widest">DEPOSIT</p>
                </div>
            </div>
        </section>
        <section id="exchange" class="bg-[#f6f6f6] undefined py-8 md:py-20 px-4 xl:px-0">
            <div id="con_form" class="max-w-screen-xl mx-auto">
                <div class="bg-white p-4 shadow-vglow md:p-8">
                    <div class="wrap clearfix">
                        <div class="mb-8">
                            <p class="text-center mb-4 font-bold mb-4 text-xl">
                                <span class="inline-block">購入の事前申請が完了しました。</span>
                                <span class="inline-block">下記の通りお振込ください。</span>
                            </p>
                            <div class="md:text-center">
                                <div class="inline-flex flex-col text-left">
                                    <p>ご注意１：振込先は毎回変更になります</p>
                                    <p>ご注意２：お名前の前に購入ワンタイムコードをご入力ください</p>
                                    <p>
                                        ご不明な点はスタッフまで
                                        <a href="/yoxibit/contact/?errormessage=今回の購入ワンタイムコード：8707949"><b><u>お問い合わせ</u></b>
                                        </a>
                                        ください。<br>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <table class="hidden table table-bordered mb-6">
                            <colgroup>
                                <col class="oce-first">
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th class="bg-[#f6f6f6]">振込人名義</th>
                                    <td><span class="text-vred font-bold">8707949</span>　ヤマダ　シンイチ
                                        <div class="add-style-c--copybtn">
                                            <button class="c-ad-copyButton"
                                                onclick="ClipboardCopyText(&quot;８７０７９４９　ヤマダ　シンイチ&quot;);">振込名義をコピー</button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table class="table table-bordered mb-6">
                            <colgroup>
                                <col class="oce-first">
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th class="bg-[#f6f6f6]">購入ﾜﾝﾀｲﾑｺｰﾄﾞ</th>
                                    <td><span class="text-base font-bold text-vred">8707949</span></td>
                                </tr>
                                <tr>
                                    <th class="bg-[#f6f6f6]">振込金額</th>
                                    <td>4,000円</td>
                                </tr>
                                <tr>
                                    <th class="bg-[#f6f6f6] ">銀行名</th>
                                    <td><span class="text-vred font-bold">ＧＭＯあおぞらネット銀行</span></td>
                                </tr>
                                <tr>
                                    <th class="bg-[#f6f6f6]">支店名</th>
                                    <td>法人営業部(101)<br></td>
                                </tr>
                                <tr>
                                    <th class="bg-[#f6f6f6]">支店番号</th>
                                    <td>101<br></td>
                                </tr>
                                <tr>
                                    <th class="bg-[#f6f6f6]">口座種別</th>
                                    <td>普通口座<br></td>
                                </tr>
                                <tr>
                                    <th class="bg-[#f6f6f6] ">口座番号</th>
                                    <td>1759619<br></td>
                                </tr>
                                <tr>
                                    <th class="bg-[#f6f6f6]">口座名義</th>
                                    <td><span class="font-bold text-vred">レディバグ（カ</span></td>
                                </tr>
                                <tr>
                                    <th class="bg-[#f6f6f6]" colspan="2" style="text-align:center;">振込名義</th>
                                </tr>
                                <tr>
                                    <td class="text-lg" colspan="2" style="text-align:center;">
                                        <p class="font-bold text-vred"><span> 8707949</span>　ヤマダ　シンイチ</p>
                                        <div class="add-style-c--copybtn mb-6" style="text-align:center;">
                                            <button class="c-ad-copyButton"
                                                onclick="ClipboardCopyText(&quot;８７０７９４９　ヤマダ　シンイチ&quot;);">振込名義をコピー</button>
                                        </div>
                                        <p class="font-bold" style="text-align:center;">必ず、この通り入力！<br>間違うと自動反映されません <a
                                                href="/yoxibit/contact/" style="text-decoration:underline;">問合せ</a></p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="text-left mb-8">
                            <p class="mb-6">振込先は収納代行サービス会社名となります
                            </p>
                            <div class="mb-4">
                                <h5 class="font-bold mb-4">●ベガへの着金が遅延することがあります</h5>
                                <p>
                                    お客さまの送金がベガに<span
                                        class="font-bold">《着金後》</span>にポイント残高が反映されます。夜間休日を中心に、銀行送金が遅延することがあります。夜間に送金したものが、翌営業日のお昼前に着金するようなケースもあります。特に日曜夜中〜月曜朝は、ほぼ遅延します。これは銀行間の処理時間の問題であり、ベガではどうしようもありません。
                                </p>
                                <p class="font-bold">着金するまで反映はできず、キャンセル、返金、補填等にはお応えできませんことを、ご承知置きください。</p>
                            </div>
                            <div class="mb-8">
                                <h5 class="font-bold mb-4">●《着金後》の手続き時間</h5>

                                <p class="font-bold">振込人名義が正確に入力されている場合</p>
                                <p>自動反映／10～20分</p>
                                <p class="font-bold">振込人名義が正確ではない場合</p>
                                <p>手動反映／半日～１日程度</p>
                            </div>
                        </div>
                        <div
                            class="flex text-white items-center justify-center mb-4 flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
                            <a class="font-bold text-black relative p-1 py-4 text-center block tracking-widest py-[0.7rem] md:text-lg w-full  md:max-w-[320px] bg-vblack hover:opacity-50 duration-300 arrow-right-black bg-primary rounded-lg"
                                href="/yoxibit/home">
                                <span>トップに戻る</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </main>
</template>

<script setup lang="ts">

</script>

<style scoped></style>