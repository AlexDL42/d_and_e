import React from 'react'

export default function WeddingListContent() {
    return (
        <>
            <div className="wlc-container-0">
                <div className="wlc-container-1">
                    Participer Au Voyage de Noces
                </div>

                <div className="wlc-container-2">
                    Notre plus beau cadeau sera bien évidemment votre présence. Toutefois, si vous voulez contribuer à réaliser nos rêves d’évasion, vous pouvez participer à la cagnotte de notre Voyage de Noces via le RIB ci-dessous pour nous aider à partir au bout du monde... 😊
                </div>



                <div className="grid gap-6 my-6 md:grid-cols-2">
                    <div className="flex-row">
                        <label className="block mb-2 text-sm font-bold text-gray-900">Titulaire du Compte</label>
                        <div className="mb-2 text-sm font-bold text-gray-900">
                            Madame HILLARD DELPHINE ou Monsieur PECNARD ETIENNE
                        </div>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-bold text-gray-900">IBAN</label>
                        <div className="mb-2 text-sm font-bold text-gray-900">
                            FR76 1820 6002 9465 0901 6547 478
                        </div>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-bold text-gray-900">BIC / SWIFT</label>
                        <div className="mb-2 text-sm font-bold text-gray-900">
                            AGRIFRPP882
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}