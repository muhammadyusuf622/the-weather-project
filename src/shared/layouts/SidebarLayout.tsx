
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import type { RootState } from '../../app/store';
import { SidebarLump, useGetWeather } from '../../features';
import type { LocationType } from '../../pages/Home';
import { useDebaunce } from '../lib';

const SidebarLayout = () => {

  const weatherInfo: LocationType[] = useSelector((store: RootState) => store.weather.weather);
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebaunce(search, 500);

    const { data, isLoading } = useGetWeather(
      weatherInfo[0]?.latitude ?? 0,
      weatherInfo[0]?.longitude ?? 0,
      !!location
    );

    useEffect(() => {
      if(debouncedSearch){
        console.log(debouncedSearch);
      }
    }, [debouncedSearch])

    console.log(data)


  return (
    <div className="bg-white/10  backdrop-blur-[5px] w-[550px] h-[100vh] border-r-5 border-white/20 p-4 text-white">
      <div className="w-[90%] m-auto">
        <div className="relative mt-15">
          <label className="absolute right-5">
            <SidebarLump />
          </label>
          <input
            className="w-full border-b-2 border-white pb-2 text-[20px] focus:outline-none focus:ring-0 focus:border-white"
            placeholder="Search Location..."
            type="text"
            onInput={(e) => setSearch(e.currentTarget.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default SidebarLayout;