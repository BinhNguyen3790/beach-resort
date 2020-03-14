import React from 'react';
import { useContext } from 'react';
import { RoomContext } from '../context';
import Title from '../components/Title';

export default function RoomsFilter() {
  const context = useContext(RoomContext);
  const { handleChange, type, capacity, price, minPrice, maxPrice, maxSize, minSize, breadfast, pets } = context;
  return (
    <section className="filter-container">
      <Title title='search rooms' />
      <form classsName='filter-form'>
        {
          // select type
          <div className="form-group">
            <label htmlFor="type">Room Type</label>
            <select name="type" id="type" value={type} className="form-cotrolle" onChange="handleChange">
              <option value=""></option>
            </select>
          </div>
          // end select type
        }
      </form>
    </section>
  )
}
