import React, { FC, useState } from "react";
import { PurchaseContainer } from "./styles/PurchaseStyles";

const Purchase: FC = () => {
  const data = {
    status_code: 0,
    status_msg: "הצלחה",
    product_id: 164,
    name: "בדיקות מוצר מסוג משלוח עד הבית עם וריאציית",
    short_description: "בדיקות",
    description:
      "<p>המארז כולל: <br /><br />נענע אייס 150 ג`<br />הדרים קינמון 150 ג`<br />סיידר תפוח 150 ג` <br />ג`ינג`ר לימון 150 ג`<br />פירות יער 150 ג`</p>",
    breadcrumbs: {
      category_id: 466,
      category_name: "תווי קניה וצרכנות",
      categories: {
        category_id: 468,
        category_name: "תווי קניה בחנויות",
        categories: [],
      },
    },
    out_of_stock_text: "<p>המלאי יתחדש בהקדם</p>",
    checkout_type_id: 1,
    checkout_type_name: "תשלום נדרש",
    fulfillment_type_id: 5,
    fulfillment_type_name: "משלוח",
    fulfillment_description:
      "<p>התמונה להמחשה בלבד<br />עד גמר המלאי<br />בכפוף לתקנון אתר ההטבות</p>",
    product_type_id: 2,
    product_type_name: "מוצר",
    restriction_description:
      "<p>במקרה של ביטול עסקה הלקוח ידאג להשבת המוצר לספק כשהוא באריזתו המקורית, שלם, תקין וללא פגם. הזיכוי ללקוח יתבצע רק לאחר קבלת אישור מהספק שהמוצר התקבל בחזרה. במידה ובקשת הביטול הגיעה לאחר שהמשלוח יצא, הזיכוי יתבצע בניכוי עלויות המשלוח.</p>",
    sale_limit_period_id: 0,
    sale_limit_period_name: null,
    sale_limit_period_length: 0,
    sale_limit_period_quantity: 0,
    allow_discounted_price: "Y",
    eligibility_type_id: 1,
    eligibility_type_name: "רגילה חודשית",
    available_eligibilities_number: 8,
    max_purchases: 29,
    product_group_code: null,
    seo_meta_title: null,
    seo_meta_keywords: null,
    seo_meta_description: null,
    seo_friendly_uri: null,
    is_wishlist: "N",
    variations: {
      attributes: [
        {
          attribute_id: 1,
          attribute_name: "צבע",
          options: [
            {
              option_id: 1,
              option_name: "כחול",
            },
            {
              option_id: 3,
              option_name: "לבן",
            },
          ],
        },
        {
          attribute_id: 2,
          attribute_name: "גודל",
          options: [
            {
              option_id: 4,
              option_name: "S",
            },
            {
              option_id: 6,
              option_name: "M",
            },
          ],
        },
      ],
      matrix: [
        {
          variation_setting_id: 33,
          variation_id: 103,
          name: "כחול - S  ",
          sku: "2133",
          product_stock_id: 154,
          stock_site_id: 144,
          image_url: "",
          image_text: "",
          pricelist_id: 153,
          pricelist_name: "בדיקות מוצר מסוג משלוח עד הבית",
          pricelist_price_id: 197,
          club_price: 8,
          discounted_price: 16,
          currency_id: "ILS",
          currency_name: "ILS",
          currency_symbol: "₪",
          is_limited: "N",
          max_buy_per_purchase: null,
          eligibilities_used: 1,
          options: [1, 4],
        },
        {
          variation_setting_id: 34,
          variation_id: 104,
          name: "כחול - M  ",
          sku: "3132",
          product_stock_id: 154,
          stock_site_id: 144,
          image_url: "",
          image_text: "",
          pricelist_id: 153,
          pricelist_name: "בדיקות מוצר מסוג משלוח עד הבית",
          pricelist_price_id: 197,
          club_price: 8,
          discounted_price: 16,
          currency_id: "ILS",
          currency_name: "ILS",
          currency_symbol: "₪",
          is_limited: "N",
          max_buy_per_purchase: null,
          eligibilities_used: 1,
          options: [1, 6],
        },
        {
          variation_setting_id: 35,
          variation_id: 105,
          name: "לבן - S  ",
          sku: "4242",
          product_stock_id: 154,
          stock_site_id: 144,
          image_url: "",
          image_text: "",
          pricelist_id: 153,
          pricelist_name: "בדיקות מוצר מסוג משלוח עד הבית",
          pricelist_price_id: 197,
          club_price: 8,
          discounted_price: 16,
          currency_id: "ILS",
          currency_name: "ILS",
          currency_symbol: "₪",
          is_limited: "N",
          max_buy_per_purchase: null,
          eligibilities_used: 1,
          options: [3, 4],
        },
        {
          variation_setting_id: 36,
          variation_id: 106,
          name: "לבן - M  ",
          sku: "4242",
          product_stock_id: 154,
          stock_site_id: 144,
          image_url: "",
          image_text: "",
          pricelist_id: 153,
          pricelist_name: "בדיקות מוצר מסוג משלוח עד הבית",
          pricelist_price_id: 197,
          club_price: 8,
          discounted_price: 16,
          currency_id: "ILS",
          currency_name: "ILS",
          currency_symbol: "₪",
          is_limited: "N",
          max_buy_per_purchase: null,
          eligibilities_used: 1,
          options: [3, 6],
        },
      ],
    },
    images: [
      {
        image_url:
          "https://dev-media.dolcemaster.co.il/purchase_orders/1657455012K5phGHxWNqCSlHvSoJ8UCWsbjtk2Gc9sl3Ay6VJA.jpg",
        image_text: null,
        main_image: "Y",
      },
    ],
    delivery_remarks_title: null,
    offer_gift_wrapping: null,
    offer_greeting_card: null,
    provider_options: [],
    business_branches: [],
    provider_id: 354,
    business_id: 0,
    business_name: null,
    prices: [],
  };

  const sizes = data.variations.attributes[1].options;
  const colors = data.variations.attributes[0].options;

  const [activeColor, setActiveColor] = useState(colors[0].option_name);
  const [activeSize, setActiveSize] = useState(sizes[0].option_name);

  const result = {color: colors[0], size: sizes[0]}

  return (
    <PurchaseContainer>
      <div className="color-header">
        <div className="color-header-left">צבע:</div>
        <div className="color-header-right">{activeColor}</div>
      </div>
      <div className="color-items">
        {colors.map((el, ind) => (
          <div
            key={ind}
            className={
              activeColor === el.option_name
                ? `item-${el.option_id}-active`
                : `item-${el.option_id}`
            }
            onClick={() => {
              setActiveColor(el.option_name);
              result.color = el;
            }}
          />
        ))}
      </div>
      <div className="size-header">גודל:</div>
      <div className="size-items">
        {sizes.map((el, ind) => (
          <div
            className={
              activeSize === el.option_name ? `size-item-active` : `size-item`
            }
            key={ind}
            onClick={() => setActiveSize(el.option_name)}
          >
            {el.option_name}
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          const result = { color: activeColor, size: activeSize };
          console.log(result);
        }}
      >
        Log to console
      </button>
    </PurchaseContainer>
  );
};

export default Purchase;
