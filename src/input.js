const input = [
  {
    type: "so",

    id: 123,

    end_points: ["ack", "mobile", "armada", "wms"],

    ack: true,

    mobile: true,

    armada: true,

    wms: true
  },

  {
    type: "so",

    id: 124,

    end_points: ["ack", "mobile", "armada", "wms"],

    ack: true,

    mobile: true,

    armada: true,

    wms: false // This transaction has failed
  },

  {
    type: "so",

    id: 125,

    end_points: ["ack", "mobile", "armada"],

    ack: true,

    mobile: true,

    armada: true
  },

  {
    type: "so",

    id: 126,

    end_points: ["ack", "mobile", "armada", "wms"],

    ack: true,

    mobile: true,

    armada: true,

    wms: true
  },

  {
    type: "so",

    id: 127,

    end_points: ["ack", "mobile", "armada", "wms"],

    ack: true,

    mobile: true,

    armada: true

    // This transaction has also failed because end-point "wms" is not present.
  }
];

export default input;
