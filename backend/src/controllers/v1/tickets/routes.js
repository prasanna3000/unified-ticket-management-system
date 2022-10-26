const {
    saveTicketToDB,
    getTicketsFromDB,
    updateTicketsInDB,
} = require('../../../models/tickets/transactions');
const uuid = require('uuid').v4;

const saveTicket = (async(req, res) => {
    try {
        const {
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
        } = req.body;

        const id = uuid();

        const ticketSaved = await saveTicketToDB(
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
        );
        if(ticketSaved && Object.keys(ticketSaved).length > 0  && ticketSaved.matchedCount > 0) {
            return res.status(200).json({
                success: true,
            });
        }  
    } catch (error) {
       return res.status(400).json({
        success: false,
        ticket: ticketSaved,
       });
    }
});

const getTickets = (async(req, res) => {
    try {
        const {
            pageOffset,
            pageLimit,
        } = req.query;

        const ticketsFetched = await getTicketsFromDB(
            pageLimit,
            pageOffset,
        );
        if(ticketsFetched && ticketsFetched.length > 0) {
           console.log('No tickets found so far');
        }
        return res.status(200).json({
            success: true,
            tickets: ticketsFetched,
        })
    } catch (error) {
       return res.status(400).json({
        success: false,
        tickets: [],
       });
    }
});

const updateTicket = (async(req, res) => {
    try {
        const {
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
        } = req.body;

        let dataToUpdate = {};
        if(case_id) {
            dataToUpdate.case_id = case_id;
        }
        if(priority) {
            dataToUpdate.priority = priority;
        }
        if(category) {
            dataToUpdate.category = category;
        }
        if(sub_category) {
            dataToUpdate.sub_category = sub_category;
        }
        if(source) {
            dataToUpdate.source = source;
        }
        if(source_meta) {
            dataToUpdate.source_meta = source_meta;
        }
        if(provider) {
            dataToUpdate.provider = provider;
        }
        if(provider_meta) {
            dataToUpdate.provider_meta = provider_meta;
        }
        if(status) {
            dataToUpdate.status = status;
        }
        if(author) {
            dataToUpdate.author = author;
        }
        if(acl) {
            dataToUpdate.acl = acl;
        }
        
        const updatedTicket = await updateTicketsInDB(
            id,
            dataToUpdate,
        );
        if(updatedTicket && updatedTicket.length > 0) {
           console.log('Ticket Updated Failed');
        }
        return res.status(200).json({
            success: true,
            tickets: updatedTicket,
        })
    } catch (error) {
       return res.status(400).json({
        success: false,
        tickets: {},
       });
    }
});

module.exports = {
    saveTicket,
    getTickets,
    updateTicket,
}
