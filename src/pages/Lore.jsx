import React from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

export default function Lore() {
  return (
    <>
      <Header />
      <main className="main-lore">
        <section className="section-lore">
          <img
            className="lore__img"
            src="/assets/ui/lore-img.jpg"
            alt="paysage"
          />
          <h1 className="lore__title">
            L&apos;HISTOIRE D&apos;O&apos;SURVIVORS
          </h1>
          <p className="lore__text">
            Dans un monde autrefois prospère et paisible, une grande calamité
            s&apos;est abattue. des forces sombres et maléfiques ont émergé des
            profondeurs de la terre, libérant une horde de morts-vivants et
            d&apos;orcs assoiffés de destruction. les terres autrefois verdoyantes
            ont été plongées dans les ténèbres et le chaos.
          </p>
          <p className="lore__text">
            Ensemble, trois héros doivent unir leurs forces et affronter les
            légions de squelettes et les hordes d&apos;orcs qui menacent de submerger
            le monde. dans un dernier bastion de lumière, ils se dressent contre
            l&apos;obscurité, prêts à affronter chaque vague d&apos;ennemis avec courage
            et détermination.
          </p>
          <p className="lore__text">
            Seuls les plus courageux et les plus habiles survivront pour
            raconter cette épopée, celle où les légendes sont forgées dans le
            feu de la bataille et où l&apos;espoir brille même dans les heures les
            plus sombres.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
