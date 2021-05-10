"use strict";
const { parseMultipartData, sanitizeEntity } = require("strapi-utils");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async bulkUpdate(ctx) {
    const { data } = ctx.request.body;
    if (!data)
      throw new Error(
        "Invalid request.body, json fomrat with field 'data' must be provided."
      );
    return;
  },
  async bulkCreate(ctx) {
    const { data } = ctx.request.body;
    if (!data)
      throw new Error(
        "Invalid request.body, json fomrat with field 'data' must be provided."
      );
    await Promise.all(
      data.map(async (store, i) => {
        let entity;
        const {
          name,
          plus_code: { compound_code },
          business_status,
          formatted_address,
          geometry: {
            location: { lng, lat },
          },
          place_id,
          rating,
          user_ratings_total,
          trx_formatted_phone_number,
        } = store;
        entity = await strapi.services.stores.create({
          name,
          business_status,
          formatted_address,
          compound_code,
          lng,
          lat,
          place_id,
          rating,
          user_ratings_total,
          trx_formatted_phone_number,
        });
        return entity;
      })
    );
    return "bulkCreate success";
  },
};
