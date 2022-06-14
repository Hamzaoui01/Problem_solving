# Problem_solving
##  All-you-can-eat buffet
To attract tourists, a casino in Las Vegas offers an all-you-can-eat buffet
where everyone pays what they want to pay.

Knowing that you know what each tourist is willing to pay, you are
asked to calculate the restaurant's earnings for the day:
At the start of the day, the restaurant is empty.
A tourist arrives, is seated, eats, pays and leaves.
there are only nbSeats available. A tourist can eat and pay
only if it can be placed.
If a tourist arrives at the restaurant when there are no more seats available:

Either he waits his turn until a place becomes available
Or he waits a moment and leaves before a place becomes available
A tourist can come several times during the day in which case he does not pay the maximum
only once.
implement the computeDayGains(nbSeats,payingGuests,guestMovements) method which returns the day's earnings:
The payingGuests array contains what each tourist is willing to pay. For example if payingGuests[5] is 25 ,
this means that the tourist with ID 5 is willing to pay $25 for the buffet.
The guestMovements table gives the order of arrivals and departures of tourists. The first time you find an identifier in the table, it is an arrival. The second time, it is a departure. arrival is always followed by a departure during the day.
