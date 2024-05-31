<template>
    <main class="flex-grow flex-1 overflow-x-hidden">
        <section class="bg-white" id="title">
            <div class="py-12 md:py-16 px-4 2xl:px-0 max-w-screen-xl mx-auto relative _bg-vred">
                <div class="overflow-x-scroll_ w-full hidden md:block">
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
        <section id="deposit" class="bg-[#f6f6f6] undefined py-8 md:py-20 px-4 xl:px-0">
            <div class="max-w-screen-xl mx-auto">
                <div id="con_form" style="display:block;">
                    <div class=" p-3 ">
                        <div class="bg-white p-4 shadow-vglow md:p-8">
                            <form name="f1" method="post" action="index.html" data-sharkid="__form__0">
                                <table class="table table-bordered mb-6 w-full stroke-1">
                                    <tbody>
                                        <tr class="stroke-1">
                                            <th class="bg-[#F8F8F8] align-middle aling-center border border-grayD2">入金予定額</th>
                                            <td class="p-4 border border-grayD2">
                                                <div class="flex flex-row items-center space-x-2 m-w-10">
                                                    <input id="amount" name="job_amount"
                                                        class="flex-grow md:text-xl font-black appearance-none border border-gray-300 p-3 text-grey-darker w-44 md:w-64 max-w-[400px]"
                                                        value="" type="number" step="1" placeholder="日本円で入力" min="2000"
                                                        max="500000" data-sharkid="__0">
                                                    <span>円</span>
                                                </div>
                                                <div class="hidden">(3,100円以上7,711,900円以下をご入力下さい。)</div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div class="hidden">
                                    <h2 class="u_line"></h2>
                                    <p>サービスとセキュリティ性の向上のため、入金受付口座は今後も変更になることがあります。</p>
                                    <p>次のページで表示されます入金口座情報をご確認いただきますようお願いいたします。</p>
                                </div>
                                <div class="mb-8">
                                    <ul class="list-disc list-inside">
                                        <li>1日の限度額　2,000円～500,000円</li>
                                        <li>ポイントへの換金レートは、当社にて手続きを行う時点のリアルタイムレート
                                            <br>（大手銀行の店舗両替レート（CASH.S）と同水準）が適用されます
                                        </li>
                                    </ul>
                                </div>
                                <div class="mb-4">
                                    <div class="px-2 py-1 mb-4 flex items-center border-b border-primary">
                                        <img src="/assets/img/yoxibit/pixel-diamond.svg" width="16" height="16">
                                        <h5 class="px-4 font-bold">YOXIBITの着金が遅延することがあります</h5>
                                    </div>
                                    <p>
                                        お客さまの送金がベガに
                                        <span class="font-bold">《着金後》</span>
                                        にポイント残高が反映されます。夜間休日を中心に、銀行送金が遅延することがあります。夜間に送金したものが、翌営業日のお昼前に着金するようなケースもあります。特に日曜夜中〜月曜朝は、ほぼ遅延します。これは銀行間の処理時間の問題であり、ベガではどうしようもありません。
                                    </p>
                                    <p class="font-bold">着金するまで反映はできず、キャンセル、返金、補填等にはお応えできませんことを、ご承知置きください。</p>
                                </div>
                                <div class="mb-4">
                                    <div class="px-2 py-1 mb-4 flex items-center border-b border-primary">
                                        <img src="/assets/img/yoxibit/pixel-diamond.svg" width="16" height="16">
                                        <h5 class="px-4 font-bold">《着金後》の手続き時間</h5>
                                    </div>
                                    <p class="font-bold">振込人名義が正確に入力されている場合</p>
                                    <p>自動反映／10～20分</p>
                                    <p class="font-bold">振込人名義が正確ではない場合</p>
                                    <p>手動反映／半日～１日程度</p>
                                </div>
                                <div class="mb-4">
                                    <div class="px-2 py-1 mb-4 flex items-center border-b border-primary">
                                        <img src="/assets/img/yoxibit/pixel-diamond.svg" width="16" height="16">
                                        <h5 class="px-4 font-bold">詐欺、窃盗、他人の金…即、通報します</h5>
                                    </div>
                                    <p>万が一あなたに権限が無い資金（他人の金）、詐欺や窃盗によって得た資金を当社に送金された場合、YOXIBITは</p>
                                    <p class="font-bold">各国警察を始め関係省庁に当該ユーザーの情報開示や捜査協力を行います。</p>
                                </div>
                                <div class="text-center mb-4">
                                    <p>着金遅延を了承の上で、</p>
                                </div>
                                <div
                                    class="flex items-center justify-center mb-4 flex-col flex-col-reverse md:flex-row md:space-x-4 ">
                                    <a class=" font-bold text-white relative p-1 py-4 text-center block tracking-widest py-[0.7rem] md:text-lg w-full  md:max-w-[320px] bg-secondary hover:opacity-50 duration-300 arrow-right-black rounded-lg arrow-left-white"
                                        href="/yoxibit/home">
                                        <span>トップに戻る</span>
                                    </a>
                                    <button type="button" name="ok" @click="DepositSubmit"
                                        class="mb-4 md:mb-0 font-bold relative p-1 py-4 text-center block tracking-widest py-[0.7rem] md:text-lg w-full md:max-w-[320px] bg-primary hover:opacity-50 duration-300 arrow-right-black rounded-lg text-black">
                                        <span id="okname">申請を確定する</span>
                                    </button>
                                </div>
                                <input id="step" name="postback" value="1" type="hidden">
                                <input id="partnerid" name="job_partnerid" value="R001" type="hidden">
                                <input id="referenceNo" name="job_referenceNo" value="U00043720240529185338" type="hidden">
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const DepositSubmit = () => {
  router.push('/yoxibit/deposit-finish')
}
</script>

<style scoped></style>