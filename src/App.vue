<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'
console.log(supabase)
</script>

<template>
  <main>
    <router-view />
  </main>

  <h1>Hola</h1>
</template>

<style scoped></style>
