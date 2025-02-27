import React from 'react'

const QuestionModal = () => {
    return (
        <div
            class="modal fade"
            id="SSSModal"
            tabindex="-1"
            aria-labelledby="SSSModalLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog">
                <div class="modal-content bg-light">
                    <div class="modal-header">
                        <h1 class="modal-title text-info" id="SSSModalLabel">
                            Sıkça Sorulan Sorular
                        </h1>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div class="modal-body">
                        <div class="accordion" id="accordionSSS">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button
                                        class="accordion-button text-info fw-bold"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        1. Kanatlar nasıl çalışır?
                                    </button>
                                </h2>
                                <div
                                    id="collapseOne"
                                    class="accordion-collapse collapse show"
                                    data-bs-parent="#accordionSSS"
                                >
                                    <div class="accordion-body">
                                        Kanatlar, satın alındıktan sonra size özel bir entegrasyon
                                        süreciyle birleşir. Bu işlem tamamen acısızdır ve kısa
                                        sürer. Kanatlar, vücut kaslarınızla senkronize çalışarak
                                        uçma yeteneği sağlar.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button
                                        class="accordion-button collapsed text-info fw-bold"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="collapseTwo"
                                    >
                                        2. Uçmaya hemen başlayabilir miyim?
                                    </button>
                                </h2>
                                <div
                                    id="collapseTwo"
                                    class="accordion-collapse collapse"
                                    data-bs-parent="#accordionSSS"
                                >
                                    <div class="accordion-body">
                                        İlk defa uçacak kullanıcılarımız için bir eğitim rehberi ve
                                        başlangıç ipuçları sunuyoruz. Kanatlarınızı test ederken
                                        güvenli bir alanda pratik yapmanızı öneriyoruz.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button
                                        class="accordion-button collapsed text-info fw-bold"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree"
                                        aria-expanded="false"
                                        aria-controls="collapseThree"
                                    >
                                        3. Kanatlar dayanıklı mı?
                                    </button>
                                </h2>
                                <div
                                    id="collapseThree"
                                    class="accordion-collapse collapse"
                                    data-bs-parent="#accordionSSS"
                                >
                                    <div class="accordion-body">
                                        Evet, kanatlar son teknoloji malzemelerden üretilmiştir.
                                        Hava koşullarına dayanıklıdır ve uzun ömürlüdür. Ancak,
                                        bakım kılavuzundaki talimatları takip etmeniz önerilir.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button
                                        class="accordion-button collapsed text-info fw-bold"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour"
                                        aria-expanded="false"
                                        aria-controls="collapseFour"
                                    >
                                        4. Kanatların boyutu kişiye özel mi?
                                    </button>
                                </h2>
                                <div
                                    id="collapseFour"
                                    class="accordion-collapse collapse"
                                    data-bs-parent="#accordionSSS"
                                >
                                    <div class="accordion-body">
                                        Evet, kanatlar vücut ölçülerinize ve uçuş ihtiyaçlarınıza
                                        göre tasarlanır. Sipariş sırasında gerekli bilgileri
                                        girmeniz yeterlidir.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button
                                        class="accordion-button collapsed text-info fw-bold"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseFive"
                                        aria-expanded="false"
                                        aria-controls="collapseFive"
                                    >
                                        5. Kanatlarla ne kadar yük taşıyabilirim?
                                    </button>
                                </h2>
                                <div
                                    id="collapseFive"
                                    class="accordion-collapse collapse"
                                    data-bs-parent="#accordionSSS"
                                >
                                    <div class="accordion-body">
                                        Kanatlarınızın taşıma kapasitesi, seçtiğiniz model ve
                                        tasarıma göre değişir. Standart kanat modellerimiz 10-15 kg
                                        ek yük taşıyabilir.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button
                                        class="accordion-button collapsed text-info fw-bold"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseSix"
                                        aria-expanded="false"
                                        aria-controls="collapseSix"
                                    >
                                        6. Kanatlar güvenli mi?
                                    </button>
                                </h2>
                                <div
                                    id="collapseSix"
                                    class="accordion-collapse collapse"
                                    data-bs-parent="#accordionSSS"
                                >
                                    <div class="accordion-body">
                                        Evet, kanatlarımız güvenlik testlerinden geçmiştir. Ancak
                                        uçarken çevre koşullarını dikkate almanız ve güvenlik
                                        kurallarına uymanız önemlidir.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuestionModal