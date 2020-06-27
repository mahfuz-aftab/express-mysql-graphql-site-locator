const {
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
} = require('graphql');
const merge = require('lodash.merge');

const { FloorType } = require('../types');
const { Floor } = require('../../models');

const createFloor = {
  type: FloorType,
  description: 'The mutation that allows you to create a new Floor',
  args: {
    siteId: {
      name: 'siteId',
      type: new GraphQLNonNull(GraphQLInt),
    },
    floor: {
      name: 'floor',
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: (value, { siteId, floor }) => (
    Floor.create({
      siteId,
      floor,
    })
  ),
};

const updateFloor = {
  type: FloorType,
  description: 'The mutation that allows you to update an existing Note by Id',
  args: {
    floorId: {
      name: 'floorId',
      type: new GraphQLNonNull(GraphQLInt),
    },
    siteId: {
      name: 'siteId',
      type: new GraphQLNonNull(GraphQLInt),
    },
    floor: {
      name: 'floor',
      type: GraphQLString,
    },
  },
  resolve: async (value, { floorId, siteId, floor }) => {
    const foundFloor = await Floor.findByPk(floorId);

    if (!foundFloor) {
      throw new Error(`Floor with id: ${floorId} not found!`);
    }

    const updatedFloor = merge(foundFloor, {
      siteId,
      floor,
    });

    return foundFloor.update(updatedFloor);
  },
};

const deleteFloor = {
  type: FloorType,
  description: 'The mutation that allows you to delete a existing Floor by Id',
  args: {
    floorId: {
      name: 'floorId',
      type: new GraphQLNonNull(GraphQLInt),
    },
  },
  resolve: async (value, { floorId }) => {
    const foundNote = await Floor.findByPk(floorId);

    if (!foundNote) {
      throw new Error(`Floor with id: ${floorId} not found!`);
    }

    await Floor.destroy({
      where: {
        floorId,
      },
    });

    return foundFloor;
  },
};

module.exports = {
  createFloor,
  updateFloor,
  deleteFloor,
};
