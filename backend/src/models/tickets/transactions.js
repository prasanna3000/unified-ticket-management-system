const Ticket = require('.')

const saveTicketToDB = async(
    id,
    case_id,
    priority,
    category,
    sub_category,
    source,
    source_meta,
    provider,
    provider_meta,
    status,
    author,
    acl,
) => {
    try {
        let ticket = Ticket({
            id,
            case_id,
            priority,
            category,
            sub_category,
            source,
            source_meta,
            provider,
            provider_meta,
            status,
            author,
            acl,
        });
        ticket = ticket.save();
        return ticket;
    } catch (error) {
        console.log('Error occurred in saving Ticket', error);
        return null;
    }
}

const updateTicketsInDB = async(
    id,
   dataToUpdate
) => {
    try {
        const match = {
            id,
        };
        const ticket = await Ticket.findOneAndUpdate(match, 
            {
                $set: {
                    ...dataToUpdate,
                },
            },
            {
                new: true
            }
        );
        return ticket;
    } catch (error) {
        console.log('Error occurred in saving Ticket', error);
        return null;
    }
}

const getTicketsFromDB = async(pageOffset, pageLimit) => {
    try {
        const project = {
            history: 0,
            comments: 0,
            provider: 0,
            provider_meta: 0,
            source_meta: 0,
            __v: 0,
            _id: 0,
        }
        const tickets = await Ticket.find(
            {},
            project,
        ).skip(pageOffset * pageLimit).limit(pageLimit).lean();
        return tickets;
    } catch (error) {
        console.log('Error occurred while fetching tickets', error);
        return [];
    }
}

module.exports = {
    saveTicketToDB,
    getTicketsFromDB,
    updateTicketsInDB,
};