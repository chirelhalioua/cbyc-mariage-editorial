<script setup lang="ts">
const year = '2027'
const mapUrl = 'https://www.google.com/maps/search/?api=1&query=Mas+des+Oliviers+Provence'
</script>

<template>
  <main class="artdeco-site">
    <section class="hero" aria-label="Invitation de mariage">
      <div class="hero-pattern" aria-hidden="true"></div>
      <div class="hero-top"><span>C BY C</span><span>INVITATION PRIVÉE · {{ year }}</span></div>
      <div class="hero-frame">
        <div class="sunburst" aria-hidden="true"><span></span></div>
        <p class="overline">AVEC LA JOIE DE NOS FAMILLES</p>
        <h1><span>Clara</span><i>&</i><span>Mathis</span></h1>
        <div class="hero-divider"><span></span><b>✦</b><span></span></div>
        <p class="hero-invite">ont le plaisir de vous convier<br />à célébrer leur mariage</p>
        <p class="hero-date">SAMEDI <b>18</b> SEPTEMBRE 2027</p>
        <a class="discover" href="#invitation">DÉCOUVRIR L’INVITATION <span>↓</span></a>
      </div>
      <div class="hero-bottom"><span>UNE JOURNÉE À CÉLÉBRER</span><span>PROVENCE · FRANCE</span></div>
    </section>

    <section id="invitation" class="invitation-section">
      <div class="section-ornament" aria-hidden="true">✧</div>
      <p class="overline dark">LE BONHEUR SE PARTAGE</p>
      <h2>Une journée, <em>mille souvenirs.</em></h2>
      <p class="intro">Entourés de ceux qui leur sont chers, Clara et Mathis seraient honorés de votre présence pour célébrer leur union et partager cette journée inoubliable.</p>

      <div class="details-card">
        <div class="details-heading"><span>LE RENDEZ-VOUS</span><span>18 · 09 · 27</span></div>
        <div class="details-grid">
          <article><span class="detail-number">01</span><p class="overline dark">LA DATE</p><h3>Samedi</h3><p>18 septembre 2027</p></article>
          <article><span class="detail-number">02</span><p class="overline dark">LA CÉRÉMONIE</p><h3>16h30</h3><p>Accueil des invités</p></article>
          <article><span class="detail-number">03</span><p class="overline dark">LA RÉCEPTION</p><h3>18h30</h3><p>Dîner & célébration</p></article>
        </div>
        <div class="details-footer"><span>MAS DES OLIVIERS · PROVENCE</span><a :href="mapUrl" target="_blank" rel="noopener noreferrer">VOIR L’ITINÉRAIRE ↗</a></div>
      </div>
    </section>

    <section class="venue-section">
      <div class="venue-art" aria-hidden="true"><div class="arch arch-one"></div><div class="arch arch-two"></div><span>18</span></div>
      <div class="venue-copy">
        <p class="overline">LE LIEU DE NOTRE RENDEZ-VOUS</p>
        <h2>Mas des<br /><em>Oliviers</em></h2>
        <p>Un écrin de charme au cœur de la Provence pour vivre ensemble une parenthèse précieuse.</p>
        <a :href="mapUrl" target="_blank" rel="noopener noreferrer" class="text-link">LOCALISER LE LIEU <span>↗</span></a>
      </div>
    </section>

    <section class="closing-section">
      <div class="closing-pattern" aria-hidden="true"></div>
      <p class="overline">NOUS AVONS HÂTE DE VOUS RETROUVER</p>
      <div class="closing-monogram">C <i>&</i> M</div>
      <p class="closing-date">18 SEPTEMBRE 2027 · PROVENCE</p>
      <div class="closing-rule"></div>
      <p class="closing-thanks">Avec toute notre affection</p>
    </section>

    <footer class="site-footer">
      <span>UNE CRÉATION DIGITALE</span>
      <a href="https://www.cbyc-invitations.fr/" target="_blank" rel="noopener noreferrer">IMAGINÉE AVEC CŒUR PAR <b>C BY C</b> ↗</a>
    </footer>
  </main>
</template>
