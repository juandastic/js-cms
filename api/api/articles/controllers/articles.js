'use strict';

const { sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  /**
   * Retrieve a record.
   *
   * @return {Object}
   */
  async findOne(ctx) {
    const entity = await strapi.services.articles.findOne({slug: ctx.params.slug});
    if (entity) {
      const articles_related = await strapi.services.articles.find({ id_ne: entity.id });

      entity.articles_related = articles_related
    }

    return sanitizeEntity(entity, { model: strapi.models.articles });
  },
};




