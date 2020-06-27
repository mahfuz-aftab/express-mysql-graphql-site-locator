const merge = require('lodash.merge');

const { SiteType } = require('../types');
const { Site } = require('../../models');
const { SiteInputType } = require('../inputTypes');

const updateSite = {
  type: SiteType,
  description: 'The mutation that allows you to update an existing Site by Id',
  args: {
    site: {
      name: 'site',
      type: SiteInputType('update'),
    },
  },
  resolve: async (_, { site }) => {
    const foundSite = await Site.findByPk(site.siteId);

    if (!foundSite) {
      throw new Error(`Site with id: ${site.siteId} not found!`);
    }

    const updatedSite = merge(foundSite, {
      siteName: site.siteName,
      address: site.address,
    });

    return foundSite.update(updatedSite);
  },
};

const deleteSite = {
  type: SiteType,
  description: 'The mutation that allows you to delete a existing Site by Id',
  args: {
    site: {
      name: 'site',
      type: SiteInputType('delete'),
    },
  },
  resolve: async (_, { site }) => {
    const foundSite = await Site.findByPk(site.siteId);

    if (!foundSite) {
      throw new Error(`Site with id: ${site.siteId} not found!`);
    }

    await Site.destroy({
      where: {
        siteId: site.siteId,
      },
    });

    return foundSite;
  },
};

module.exports = {
  updateSite,
  deleteSite,
};
