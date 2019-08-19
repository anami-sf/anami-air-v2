<!-- const create = (req, res) => {
    //Explain line below, what is 'req.body' here?
    //req.params.id
    Flight.findById(req.params.id, (err, flight) => {
        flight.tickets.push(req.body)
        ticket.save((err)=> {
            //??? re-direct route
            if (err) return redirect('/tickets/new')
            res.redirect(`/flights/${flight._id}`)
        })
    }) 
} -->
