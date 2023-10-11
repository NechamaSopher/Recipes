const { Model } = require('objection');
const _ = require('lodash');

class Event extends Model {
  static get tableName() {
    return 'event';
  }

  toBody() {
    return {
      id: this.id,
      type: this.type,
      userId: this.userId,
      timestamp: this.timestamp,
      details: this.details
    };
  }

  static async create(data) {
    try {
      const event = await Event.query().insertGraphAndFetch(data);
      
      return event.toBody();
    } catch (err) {
      console.error(err);
      throw new Error('Failed to create event');
    }
  }
}

module.exports = Event;
