<template>
  <div class="menu">
    <input
      type="text"
      placeholder="Search.."
      class="search mb-4"
      v-model="selectedCountry"
      @keyup="submit()"
     />
    
    <ul>
      <a
        v-for="(country, i) in searchedCounteries"
        :key="i"
        @click="
          sendData(country);
          clearSearchBar();
        "
      >
        <li>{{ country.name }} <i class="fas fa-angle-double-right"></i></li>
      </a>
    </ul>
  </div>
</template>

<script>
import { getData } from "../API";

export default {
  async mounted() {
    const { data } = await getData();
    this.countries = data;
    this.searchedCounteries = data;
  },

  data() {
    return {
      countries: [],
      searchedCounteries: [],
      selectedCountry: "",
    };
  },
  methods: {
    submit() {
      let sc = this.selectedCountry.toLowerCase();
      sc = sc.charAt(0).toUpperCase() + sc.slice(1);
      const result = this.countries.filter((data) => data.name.startsWith(sc));
      this.searchedCounteries = result;
    },
    sendData(data) {
      this.$emit("sendCountryData", data);
    },
    clearSearchBar() {
      this.selectedCountry = "";
      this.searchedCounteries = this.countries;
    },
  },
};
</script>

<style lang="scss" scoped>
::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar {
  width: 8px;
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #fff;
}
.menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  position: fixed;

  ul {
    height: 750px;
    overflow-y: scroll;
    width: 320px;
    li {
      transition: 0.4s;
      border-radius: 16px;
      color: white;
      font-size: 16px;
      list-style: none;
      padding: 1rem;
      display: flex;
      justify-content: space-between;
      cursor: pointer;
      i {
        transition: 0.2s;
      }
      &:hover {
        background-color: #fff;
        color: #000;
        font-weight: 700;
        i {
          transform: translateX(-5px);
        }
      }
    }
  }
}
.search {
  background-color: transparent;
  color: #fff;
  font-size: 16px;
  padding: 0.6rem 1.2rem;
  // border-radius: 10px;
  width: 75%;
  border: 0;
  border-bottom: 1px solid #fff !important;
  transition: 0.2s;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #fff;
  }
}
a {
  text-decoration: none;
}
.bg-transparent {
  backdrop-filter: blur(5px);
}
</style>
