import React, { useState } from "react";
import cn from "classnames";
import ReactTagInput from "@pathofdev/react-tag-input";
import Select from "react-select";
import MultiSlider, { Progress, Dot } from 'react-multi-bar-slider';
import Icon from "../../../components/Icon";
import styles from "./Filter.module.sass";
import "@pathofdev/react-tag-input/build/index.css";

const Filter = () => {
  const options = [
    { value: 'hkd', label: 'Hong Kong dollar (HKD)' },
    { value: 'usd', label: 'US dollar (USD)' },
  ];
  const [tags, setTags] = useState([]);
  const [priceOption, setPriceOption] = useState(options[0]);
  const [price, setPrice] = useState(50);

  const handlePriceUnitChange = (value) => {
    setPriceOption(value)
  }

  const handlePrice = (value) => {
    setPrice(value)
  }

  const colourStyles = {
    control: styles => ({ ...styles, backgroundColor: '#202020', borderColor: 'transparent !important', boxShadow: "0" }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      const color = "red";
      return {
        ...styles,
        backgroundColor: isDisabled
          ? null
          : isSelected
            ? "white"
            : isFocused
              ? "#202020"
              : null,
        color: isDisabled
          ? 'black'
          : isSelected
            ? 'black'
            : isFocused
              ? "white"
              : null,
        margin: "10px 0",
        cursor: isDisabled ? 'not-allowed' : 'default',
      };
    },
    singleValue: styles => ({ ...styles, color: "white" }),
    menu: styles => ({ ...styles, backgroundColor: "#202020" }),
    indicatorSeparator: styles => ({ ...styles, display: "none" }),
  };

  return (
    <div className={cn(styles.container)}>
      <p className={cn("mb-1", styles.label)}>
        tags
      </p>
      <ReactTagInput
        tags={tags}
        onChange={(newTags) => setTags(newTags)}
        placeholder=" "
      />
      <p className={cn("mt-3 mb-3", styles.label)}>
        pricing
      </p>
      <Select
        value={priceOption}
        onChange={handlePriceUnitChange}
        options={options}
        styles={colourStyles}
      />
      <div className={cn("mt-3 mb-4", styles.priceWrapper)}>
        <input
          className="input"
          type="number"
          step="any"
          placeholder="Min"
        />
        <p>to</p>
        <input
          className="input"
          type="number"
          step="any"
          placeholder="Max"
        />
      </div>
      <div className={styles.divider}></div>
      <p className={cn("mt-3 mb-3", styles.label)}>
        artist
      </p>
      <div className={styles.searchWrapper}>
        <input
          type="text"
          name="search"
          placeholder="Search artists"
          required
        />
        <button>
          <Icon name="search" size="20" />
        </button>
      </div>
      <p className={cn("mt-3 mb-3", styles.label)}>
        price
      </p>
      <MultiSlider
        height={13}
        slidableZoneSize={25}
        backgroundColor="#16EBAE"
        equalColor="#16EBAE"
        style={{ marginBottom: 40, borderRadius: 0 }}
        onSlide={handlePrice}
        roundedCorners
        reversed
      >
        <Progress color="green" height={13} progress={price}>
          <Dot className={styles.dot} />
        </Progress>
      </MultiSlider>
    </div>
  );
};

export default Filter;
