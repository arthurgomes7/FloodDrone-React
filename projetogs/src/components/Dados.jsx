import { useState } from 'react'
import '../App.css';

function Dados() {
  

  return (
    <>
      <div className='p-5'>
          <div className='p-5'>
            <h1 className='text-white text-4xl font-semibold text-center'>Dados do Mercado</h1>
          </div>
          <div className='flex flex-col gap-5 xl:justify-center xl:items-center xl:gap-10'>
            <div className='flex flex-col gap-5 xl:flex-row xl:gap-10'>
                <div class="flex items-center gap-5 rounded-xl bg-white p-4 shadow-lg ring-1 ring-black/5 dark:bg-gray-600">
                    <div class="grid grid-cols-1 grid-rows-1">
                        <i class="fi fi-rr-cloud-showers-heavy text-3xl text-blue-400 md:text-5xl"></i>
                    </div>
                    <div class="w-0 flex-1 text-sm text-gray-950 dark:text-white xl:w-100">
                        <p class="font-medium text-base md:text-xl">21 mil Inundações</p>
                        <p class="mt-1 text-gray-500 dark:text-gray-400 md:text-base"><span class="font-medium">Entre 1991 a 2022</span></p>
                    </div>
                </div>
                <div class="flex items-center gap-5 rounded-xl bg-white p-4 shadow-lg ring-1 ring-black/5 dark:bg-gray-600">
                    <div class="grid grid-cols-1 grid-rows-1">
                        <i class="fi fi-rr-sad-tear text-3xl text-red-400 md:text-5xl"></i>
                    </div>
                    <div class="w-0 flex-1 text-sm text-gray-950 dark:text-white xl:w-100">
                        <p class="font-medium text-base md:text-xl">170 Mortes e 2,3 milhões afetados</p>
                        <p class="mt-1 text-gray-500 dark:text-gray-400 md:text-base"><span class="font-medium">Apenas no Rio Grande do Sul, 2024</span></p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-5 xl:flex-row xl:gap-10'>
                <div class="flex items-center gap-5 rounded-xl bg-white p-4 shadow-lg ring-1 ring-black/5 dark:bg-gray-600">
                    <div class="grid grid-cols-1 grid-rows-1 ">
                        <i class="fi fi-rr-hand-holding-usd text-3xl text-green-400 md:text-5xl"></i>
                    </div>
                    <div class="w-0 flex-1 text-sm text-gray-950 dark:text-white xl:w-100">
                        <p class="font-medium text-base md:text-xl">Gasto de R$ 8 bilhões por ano</p>
                        <p class="mt-1 text-gray-500 dark:text-gray-400 md:text-base"><span class="font-medium">Enchentes são responsaveis por 60% desse valor.</span></p>
                    </div>
                </div>
                <div class="flex items-center gap-5 rounded-xl bg-white p-4 shadow-lg ring-1 ring-black/5 dark:bg-gray-600">
                    <div class="grid grid-cols-1 grid-rows-1 ">
                        <i class="fi fi-rr-house-flood text-3xl text-yellow-400 md:text-5xl"></i>
                    </div>
                    <div class="w-0 flex-1 text-sm text-gray-950 dark:text-white xl:w-100">
                        <p class="font-medium text-base md:text-xl">Déficit de Infraestrutura urbana</p>
                        <p class="mt-1 text-gray-500 dark:text-gray-400 md:text-base"><span class="font-medium">Regiões com pior infraestrutura são os que mais sofrem.</span></p>
                    </div>
                </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default Dados