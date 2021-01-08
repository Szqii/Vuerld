<template>
  <div class="container-fluid">
    <div class="container-fluid content" v-if="typeof countryData == 'object'">
      <div class="title-flag">
        <h1>
          {{ countryData.name }},
          <br />
          <span class="native">{{ countryData.nativeName }}</span>
        </h1>
        <img :src="countryData.flag" width="320" height="180" />
      </div>
      <div class="infos">
        <div class="region mt-5">
          <p>
            {{ countryData.name }}
            is a country that located in
            {{ countryData.subregion }}.
          </p>
        </div>
        <div class="capitalCity">
          <p>
            Capital city: {{countryData.capital}}
          </p>
        </div>
        <div class="demonym">
          <p>Demonym: {{ countryData.demonym }}</p>
        </div>
        <div class="languages">
          <p>
            Languages:
            <span v-for="(language, i) in countryData.languages" :key="i">
              {{ language.name }}({{ language.nativeName }})
            </span>
          </p>
        </div>
        <div class="currencies">
          <p>
            Currency unit: {{ countryData.currencies[0].name }} ({{
              countryData.currencies[0].code
            }}
            {{ countryData.currencies[0].symbol }})
          </p>
        </div>
        <div class="code" v-if="countryData.callingCodes[0] != ''">
          <p>Country code: +{{ countryData.callingCodes[0] }}</p>
        </div>
        <div class="more">
          <a
            :href="`https://en.wikipedia.org/wiki/` + countryData.name"
            class="btn btn-outline-dark"
            target="_blank"
            >Read More</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getDataToContent } from "@/API.js";

export default {
  props: ["countryData"],
};
</script>

<style lang="scss" scoped>
.container-fluid {
  color: #fff;
  .title-flag {
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    h1 {
      font-size: 48px;
    }
    .native {
      font-size: 36px;
    }
  }
  .infos {
    font-size: 20px;
  }
  .capitalCity{
    display: flex;
    justify-content: flex-end;
  }
  .demonym {
    display: flex;
    justify-content: flex-end;
  }
  .region {
    display: flex;
    justify-content: flex-end;
  }
  .currencies {
    display: flex;
    justify-content: flex-end;
  }
  .languages {
    display: flex;
    justify-content: flex-end;
  }
  .code {
    display: flex;
    justify-content: flex-end;
  }
  .more {
    display: flex;
    justify-content: flex-end;
    a {
      padding: 0.8rem;
      font-weight: 700;
      color: #fff;
      border-color: #fff;
      transition: 0.4s;
      &:hover {
        color: #000;
        background-color: #fff;
      }
    }
  }
}
</style>
