<script setup lang="ts">
import Input from '@/components/ui/input/Input.vue';
import Avatar from './components/ui/avatar/Avatar.vue';
import AvatarImage from './components/ui/avatar/AvatarImage.vue';
import AvatarFallback from './components/ui/avatar/AvatarFallback.vue';
import DropdownMenu from './components/ui/dropdown-menu/DropdownMenu.vue';
import DropdownMenuTrigger from './components/ui/dropdown-menu/DropdownMenuTrigger.vue';
import DropdownMenuContent from './components/ui/dropdown-menu/DropdownMenuContent.vue';
import DropdownMenuLabel from './components/ui/dropdown-menu/DropdownMenuLabel.vue';
import DropdownMenuSeparator from './components/ui/dropdown-menu/DropdownMenuSeparator.vue';
import DropdownMenuItem from './components/ui/dropdown-menu/DropdownMenuItem.vue';
import { Icon} from "@iconify/vue";

</script>

<template>
  <main>
    <nav class="h-16 border-b bg-muted/40 flex gap-4 justify-between px-8 items-center">
      <form class="w-full max-w-96 flex items-center justify-center gap-3" 
       action="">
        <Input class="w-full pl-8 bg-background " />
        <Icon icon="oui:search"  class="text-red-400 size-6.5" />
        
      </form>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar class="w-8 h-8 rounded-full bg-amber-400">
            <AvatarImage
              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1717376548147/76aa248f-d783-4850-9ada-faab2ae3d5de.png"
              alt="Jhonatan" />
            <AvatarFallback>JH</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
          <DropdownMenuSeparator/>
          <DropdownMenuItem>Mi perfil</DropdownMenuItem>
          <DropdownMenuItem>Mi compras</DropdownMenuItem>
          <DropdownMenuItem>Mi plan</DropdownMenuItem>
          <DropdownMenuItem>Cerrar Sesion</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>



    </nav>
    <router-view />
  </main>

</template>

<style scoped></style>
