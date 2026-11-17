<script setup lang="ts">
import { ref } from 'vue'

const invitationOpen = ref(false)

const openInvitation = () => {
  invitationOpen.value = true
}
</script>

<template>
  <main class="wedding-site">
    <Transition name="cover">
      <section v-if="!invitationOpen" class="cover-screen" aria-label="Couverture de l'invitation">
        <div class="cover-image" role="img" aria-label="Photographie romantique de mariage"></div>
        <div class="cover-shade"></div>

        <div class="cover-frame">
          <p class="eyebrow cover-eyebrow">UNE INVITATION À CÉLÉBRER L’AMOUR</p>
          <div class="cover-names">
            <span>Clara</span>
            <i>&</i>
            <span>Mathis</span>
          </div>
          <div class="cover-rule"></div>
          <p class="cover-date">18 SEPTEMBRE 2027 <span>—</span> PROVENCE</p>
          <button class="open-button" type="button" @click="openInvitation">
            <span>Voir l’invitation</span>
            <span class="button-arrow" aria-hidden="true">↗</span>
          </button>
          <p class="cover-footnote">AVEC JOIE, NOUS VOUS INVITONS À PARTAGER NOTRE BONHEUR</p>
        </div>
        <div class="cover-index">C BY C <span>·</span> INVITATION DIGITALE</div>
      </section>
    </Transition>

    <Transition name="invite">
      <section v-if="invitationOpen" class="invitation-screen" aria-label="Invitation de mariage">
        <header class="invitation-header">
          <span class="brand-mark">C <i>by</i> C</span>
          <span class="header-note">LE 18 SEPTEMBRE 2027</span>
        </header>

        <div class="invitation-content">
          <p class="eyebrow">AVEC LE BONHEUR DE NOS FAMILLES</p>
          <h1 class="invitation-names">Clara <em>&</em> Mathis</h1>
          <div class="ornament" aria-hidden="true"><span></span> ✳ <span></span></div>
          <p class="invitation-copy">
            Ont la joie de vous convier à célébrer leur mariage.<br />
            Ils seraient heureux de partager avec vous cette journée<br class="desktop-break" />
            placée sous le signe de l’amour et de la fête.
          </p>

          <div class="event-details">
            <div class="detail-block">
              <span class="detail-label">LE JOUR</span>
              <strong>Samedi</strong>
              <span class="detail-main">18 septembre 2027</span>
            </div>
            <div class="detail-divider"></div>
            <div class="detail-block">
              <span class="detail-label">LE LIEU</span>
              <strong>Mas des Oliviers</strong>
              <span class="detail-main">Provence, France</span>
            </div>
          </div>

          <p class="closing-line">Au plaisir de vous retrouver pour ce grand jour.</p>
          <div class="closing-initials">C <span>&</span> M</div>
        </div>

        <footer class="invitation-footer">
          <span>AVEC TOUTE NOTRE AFFECTION</span>
          <span>FAIT AVEC CŒUR PAR C BY C</span>
        </footer>
      </section>
    </Transition>
  </main>
</template>
