<template >
    <div>
        <h1>Carreras</h1>
        <RouterLink :to="{name:'/'}"> Ir al dashboard </RouterLink>

       
    </div>

    <Table class="container m-10 ">
    <TableHeader>
      <TableRow>
        <TableHead class="w-[100px]">
          Id
        </TableHead>
        <TableHead>Nombre</TableHead>
        <TableHead>Estado</TableHead>
        <TableHead>Acciones</TableHead>   
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="car in carreras2" :key="car.id">
        <TableCell class="font-medium">
          {{ car.id }}
        </TableCell>
        <TableCell>{{ car.name }}</TableCell>
        <TableCell>{{ car.status }}</TableCell>
        <TableCell class="text-right flex gap-4">
          
        <Button variant="destructive">
            <Icon icon="tdesign:delete-filled"  />
        </Button>
        
        <Button variant="link" >
            <Icon icon="oui:document-edit" />
        </Button>

        </TableCell>
      </TableRow>
    </TableBody>
  </Table>



<div class="flex flex-row items-center justify-center">
  <Pagination v-model="page2" :total="total" :items-per-page="perPage">
    <PaginationContent v-slot="{ items }">
      <PaginationPrevious @click="changePage3(page2)"/>

     

      <PaginationNext @click="changePage2(page2)"/>
    </PaginationContent>
  </Pagination>

  <Select>
    <SelectTrigger class="w-[70px]">
      <SelectValue placeholder="Items" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        
        <SelectItem value="apple">
          5
        </SelectItem>
        <SelectItem value="banana">
          10
        </SelectItem>
        <SelectItem value="blueberry">
          15
        </SelectItem>
        
      </SelectGroup>
    </SelectContent>
  </Select>
</div>
</template>

<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient';
import {  onMounted, ref, watch } from 'vue';
import { Icon} from "@iconify/vue";
import {
  Pagination,
  PaginationContent,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { Button } from '@/components/ui/button';


const page2  = ref<number>(1)
const perPage = ref<number>(10)

const carreras2 = ref<any[]>([]);
const total = ref<number>(0)

const loadCarreras = async()=>{
    const from =(page2.value -1) * perPage.value
    const to = page2.value * perPage.value-1

    const {data, error, count} = await supabase
        .from('carrera')
        .select("*",{count:"exact"})
        .range(from,to)
        .order("id",{ascending:true})

    if (error){
        console.log("Error de conexion ", error)
        return
    }
    carreras2.value = data
    total.value = count??0   
}

const changePage2 = (page:number)=>{
    page2.value = page2.value +1
    console.log(page2)
}

const changePage3 = (page:number)=>{
    page2.value = page2.value -1
    console.log(page2)
}
    onMounted(loadCarreras)
    watch(page2, loadCarreras)

</script>

<style scoped>

</style>