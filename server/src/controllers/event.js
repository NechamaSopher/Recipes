const Event = require('../models/event');
const _ = require('lodash');

class EventCtrl {
  /**
 * Inserts event data to DB.
 * 
 *  @param {any} data event info to save
 *  @return {any} successfully seved datat.
 */
  static async create(req, res) {
    try {
      const data = _.get(req, 'body', {});      
      const event = await Event.create(data);

      res.json({ message: 'Inserted data successfully', data: event });
    } catch (err) {
      res.status(500).json({ message: err });
    }
  }
}

module.exports = EventCtrl;