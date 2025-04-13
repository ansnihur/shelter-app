import React, { useState } from 'react';
import PetForm from '../../components/animal-page/PetForm';
import SearchFilter from '../../components/animal-page/SearchFilter';
import FindPet from '../../components/animal-page/FindPet';
import Footer from "../../components/footer/Footer";

const AnimalPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("");

  return (
    <div className="animal-page">
      <PetForm />
      <SearchFilter
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      <FindPet searchQuery={searchQuery} activeFilter={activeFilter} />
      <Footer />
    </div>
  );
};

export default AnimalPage;
