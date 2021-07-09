# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


#Users 

    User.destroy_all

    user1 = User.create(
        username: "David",
        email: "David@demo.com",
        password: "DavidDemo"
    )

    user2 = User.create(
        username: "Asta",
        email: "Asta@test.com",
        password: "Asta123"
    )
    user3 = User.create( username: "Yuno", email: "Yuno@test.com", password: "Yuno123")
    user4 = User.create( username: "Emma", email: "Emma@test.com", password: "Emma123")
    user5 = User.create( username: "Noah", email: "Noah@test.com", password: "Noah123")
    user6 = User.create( username: "Olivia", email: "Olivia@test.com", password: "Olivia123")
    user7 = User.create( username: "Mateo", email: "Mateo@test.com", password: "Mateo123")
    user8 = User.create( username: "Sebastian", email: "Sebastian@test.com", password: "Sebastian123")
    user9 = User.create( username: "Mia", email: "Mia@test.com", password: "Mia123")
    user10 = User.create( username: "Julian", email: "Julian@test.com", password: "Julian123")
    user11 = User.create( username: "Sophia", email: "Sophia@test.com", password: "Sophia123")
    user12 = User.create( username: "Ethan", email: "Ethan@test.com", password: "Ethan123")
    user13 = User.create( username: "Isabella", email: "Isabella@test.com", password: "Isabella123")
    user14 = User.create( username: "Benjamin", email: "Benjamin@test.com", password: "Benjamin123")
    user15 = User.create( username: "Gianna", email: "Gianna@test.com", password: "Gianna123")
    user16 = User.create( username: "Elijah", email: "Elijah@test.com", password: "Elijah123")
    user17 = User.create( username: "Luna", email: "Luna@test.com", password: "Luna123")
    user18 = User.create( username: "Oliver", email: "Oliver@test.com", password: "Oliver123")
    user19 = User.create( username: "Emily", email: "Emily@test.com", password: "Emily123")
    user20 = User.create( username: "Alex", email: "Alex@test.com", password: "Alex123")




#Carlisting
    Carlisting.destroy_all

    carlisting1 = Carlisting.create(
        owner_id: user4.id,
        year: 1987, 
        make: "Toyota", 
        model: "Land Cruiser", 
        price: "150", 
        cartype: "SUV",
        drivetrain: "4WD",
        transmission: "Automatic", 
        tripcapacity: 350, 
        seats: 5, 
        sleeps: 3, 
        lockers: "rear", 
        rooftoptent: true,
        shower: false, 
        kitchenset: true, 
        fridge: true, 
        longitude: -122.46593720078,
        latitude: 37.781051952305376,
        location: "San Francisco",
        imageIdx: 0
    )

    carlisting2 = Carlisting.create(
        owner_id: user2.id,
        year: 2011, 
        make: "Toyota", 
        model: "Tacoma", 
        price: "150", 
        cartype: "Truck",
        drivetrain: "4WD",
        transmission: "Automatic", 
        tripcapacity: 350, 
        seats: 5, 
        sleeps: 3, 
        lockers: "rear", 
        rooftoptent: true,
        shower: true, 
        kitchenset: true, 
        fridge: true, 
        longitude: -122.4540067359941,
        latitude: 37.76331046346102,
        location: "San Francisco",
        imageIdx: 1
    )


    carlisting3 = Carlisting.create(
        owner_id: user3.id,
        year: 2018, 
        make: "Jeep", 
        model: "Renegade", 
        price: "99", 
        cartype: "SUV",
        drivetrain: "2WD",
        transmission: "Automatic", 
        tripcapacity: 350, 
        seats: 5, 
        sleeps: 3, 
        lockers: "none", 
        rooftoptent: true,
        shower: true, 
        kitchenset: true, 
        fridge: true, 
        longitude: -122.46712605312656,
        latitude: 37.72362204902285, 
        location: "San Francisco",
        imageIdx: 2
        
    )
#https://www.outdoorsy.com/rv-rental/los-angeles_or/2018_jayco_unlimited_199216-listing?address=California&date%5Bfrom%5D=2021-06-06&date%5Bto%5D=2021-06-30&from=2021-06-06&to=2021-06-30
    carlisting4 = Carlisting.create(
        owner_id: user5.id,
        year: 2016, 
        make: "Jeep", 
        model: "Wrangler", 
        price: "120", 
        cartype: "SUV",
        drivetrain: "4WD",
        transmission: "Automatic", 
        tripcapacity: 250, 
        seats: 5, 
        sleeps: 3, 
        lockers: "rear", 
        rooftoptent: true,
        shower: true, 
        kitchenset: true, 
        fridge: true, 
        longitude: -109.54008897222319,
        latitude: 38.5699006469305, 
        location: "Moab",
        imageIdx: 3
    )
#https://www.outdoorsy.com/rv-rental/memphis_tn/1998_toyota_4runner_93435-listing?address=California&date%5Bfrom%5D=2021-06-06&date%5Bto%5D=2021-06-30&from=2021-06-06&to=2021-06-30
    carlisting5 = Carlisting.create(
        owner_id: user10.id,
        year: 1998, 
        make: "Toyota", 
        model: "4runner", 
        price: "100", 
        cartype: "SUV",
        drivetrain: "4WD",
        transmission: "Manual", 
        tripcapacity: 210, 
        seats: 7, 
        sleeps: 2, 
        lockers: "none", 
        rooftoptent: true,
        shower: true, 
        kitchenset: true, 
        fridge: true, 
        longitude: -122.47982899521146,
        latitude: 337.780898716304634, 
        location: "San Francisco",
        imageIdx: 4
    )
#https://www.outdoorsy.com/rv-rental/denver_co/2009_four-wheel-campers_grandby_196304-listing
    carlisting6 = Carlisting.create(
        owner_id: user11.id,
        year: 2009, 
        make: "Toyota", 
        model: "Tundra", 
        price: "100", 
        cartype: "Truck",
        drivetrain: "4WD",
        transmission: "Automatic", 
        tripcapacity: 360, 
        seats: 2, 
        sleeps: 3, 
        lockers: "rear", 
        rooftoptent: true,
        shower: true, 
        kitchenset: true, 
        fridge: true, 
        longitude: -109.56141789784827,
        latitude: 38.58305232880615, 
        location: "Moab",
        imageIdx: 5
    )

    #https://www.outdoorsy.com/rv-rental/ogden_ut/2020_overland_other_201893-listing?address=California&date%5Bfrom%5D=2021-06-06&date%5Bto%5D=2021-06-30&from=2021-06-06&to=2021-06-30
    carlisting7 = Carlisting.create(
        owner_id: user12.id,
        year: 2020, 
        make: "Jeep", 
        model: "Gladiator", 
        price: "160", 
        cartype: "Truck",
        drivetrain: "4WD",
        transmission: "Automatic", 
        tripcapacity: 330, 
        seats: 4, 
        sleeps: 2, 
        lockers: "rear", 
        rooftoptent: true,
        shower: false, 
        kitchenset: true, 
        fridge: true, 
        longitude: -109.53772862747374,
        latitude: 38.57681229015863, 
        location: "Moab",
        imageIdx: 6
    )

    #https://www.outdoorsy.com/rv-rental/boulder_co/1994___208061-listing?address=California&date%5Bfrom%5D=2021-06-06&date%5Bto%5D=2021-06-30&from=2021-06-06&to=2021-06-30
    carlisting8 = Carlisting.create(
        owner_id: user19.id,
        year: 1992, 
        make: "Toyota", 
        model: "Land Cruiser", 
        price: "250", 
        cartype: "SUV",
        drivetrain: "4WD",
        transmission: "Automatic", 
        tripcapacity: 350, 
        seats: 5, 
        sleeps: 4, 
        lockers: "rear", 
        rooftoptent: true,
        shower: true, 
        kitchenset: false, 
        fridge: true, 
        longitude: -119.54191896059692,
        latitude: 37.92800251017967, 
        location: "Yosemite",
        imageIdx: 7
    )

    #https://www.outdoorsy.com/rv-rental/sacramento_ca/2020_smittybilt_gen-2-xl_207497-listing
    carlisting9 = Carlisting.create(
        owner_id: user18.id,
        year: 2017, 
        make: "Toyota", 
        model: "4runner", 
        price: "150", 
        cartype: "SUV",
        drivetrain: "4WD",
        transmission: "Automatic", 
        tripcapacity: 320, 
        seats: 5, 
        sleeps: 4, 
        lockers: "none", 
        rooftoptent: true,
        shower: false, 
        kitchenset: false, 
        fridge: true, 
        longitude: -119.61085283021924,
        latitude: 37.89333502993687, 
        location: "Yosemite",
        imageIdx: 8
    )

    #https://4xpedition.com/equipment/off-road-vehicles/subaru-outback-overland-road-warrior/
    carlisting10 = Carlisting.create(
        owner_id: user15.id,
        year: 2017, 
        make: "Subaru", 
        model: "Outback", 
        price: "150", 
        cartype: "Sedan",
        drivetrain: "AWD",
        transmission: "Automatic", 
        tripcapacity: 320, 
        seats: 5, 
        sleeps: 2, 
        lockers: "none", 
        rooftoptent: true,
        shower: false, 
        kitchenset: false, 
        fridge: false, 
        longitude:  -122.47536579934378,
        latitude: 37.713030512148634,
        location: "San Francisco",
        imageIdx: 9
    )



# Reviews
    Review.destroy_all
    review1 = Review.create( carlisting_id: carlisting1.id, user_id: user1.id, rating: 5, body: "Great rig! Reliable and comfortable. Got us through the toughest trails" )
    review2 = Review.create( carlisting_id: carlisting1.id, user_id: user2.id, rating: 5, body: "Super comfortable and great ground clearance." )
    review3 = Review.create( carlisting_id: carlisting1.id, user_id: user3.id, rating: 5, body: "Interior is super comfortable and our family slept comfortably in the roof top tent." )
    review4 = Review.create( carlisting_id: carlisting1.id, user_id: user4.id, rating: 5, body: "This rig took us places we couldn't have reached with our family sedan. Would rent again." )
    
    review5 = Review.create( carlisting_id: carlisting2.id, user_id: user5.id, rating: 5, body: "Great rig! Reliable and comfortable. Got us through the toughest trails" )
    review6 = Review.create( carlisting_id: carlisting2.id, user_id: user6.id, rating: 5, body: "Great rig! Reliable and comfortable. Got us through the toughest trails" )
    review7 = Review.create( carlisting_id: carlisting2.id, user_id: user7.id, rating: 5, body: "Great rig! Reliable and comfortable. Got us through the toughest trails" )
    review8 = Review.create( carlisting_id: carlisting2.id, user_id: user1.id, rating: 5, body: "Great rig! Reliable and comfortable. Got us through the toughest trails" )
    
    review9 = Review.create( carlisting_id: carlisting3.id, user_id: user8.id, rating: 5, body: "Great rig! Reliable and comfortable. Got us through the toughest trails" )
    review10 = Review.create( carlisting_id: carlisting3.id, user_id: user1.id, rating: 5, body: "Great rig! Reliable and comfortable. Got us through the toughest trails" )
    review11 = Review.create( carlisting_id: carlisting3.id, user_id: user9.id, rating: 5, body: "Great rig! Reliable and comfortable. Got us through the toughest trails" )
    review12 = Review.create( carlisting_id: carlisting3.id, user_id: user10.id, rating: 5, body: "Great rig! Reliable and comfortable. Got us through the toughest trails" )
    
    review13 = Review.create( carlisting_id: carlisting4.id, user_id: user11.id, rating: 5, body: "Great rig! Reliable and comfortable. Got us through the toughest trails" )
    review14 = Review.create( carlisting_id: carlisting4.id, user_id: user12.id, rating: 5, body: "Great rig! Reliable and comfortable. Got us through the toughest trails" )
    review15 = Review.create( carlisting_id: carlisting4.id, user_id: user13.id, rating: 5, body: "Great rig! Reliable and comfortable. Got us through the toughest trails" )
    review16 = Review.create( carlisting_id: carlisting4.id, user_id: user1.id, rating: 5, body: "Great rig! Reliable and comfortable. Got us through the toughest trails" )
    
    review17 = Review.create( carlisting_id: carlisting5.id, user_id: user14.id, rating: 5, body: "Great rig! Reliable and comfortable. Got us through the toughest trails" )
    review18 = Review.create( carlisting_id: carlisting5.id, user_id: user1.id, rating: 5, body: "Great rig! Reliable and comfortable. Got us through the toughest trails" )
    review19 = Review.create( carlisting_id: carlisting5.id, user_id: user15.id, rating: 5, body: "Great rig! Reliable and comfortable. Got us through the toughest trails" )
    review20 = Review.create( carlisting_id: carlisting5.id, user_id: user16.id, rating: 5, body: "Great rig! Reliable and comfortable. Got us through the toughest trails" )
    
    review21 = Review.create( carlisting_id: carlisting6.id, user_id: user17.id, rating: 5, body: "Great rig! Reliable and comfortable. Got us through the toughest trails" )
    review22 = Review.create( carlisting_id: carlisting6.id, user_id: user18.id, rating: 5, body: "Great rig! Reliable and comfortable. Got us through the toughest trails" )
    review23 = Review.create( carlisting_id: carlisting6.id, user_id: user1.id, rating: 5, body: "Great rig! Reliable and comfortable. Got us through the toughest trails" )
    review24 = Review.create( carlisting_id: carlisting6.id, user_id: user19.id, rating: 5, body: "Great rig! Reliable and comfortable. Got us through the toughest trails" )
    
    review25 = Review.create( carlisting_id: carlisting7.id, user_id: user20.id, rating: 5, body: "Great rig! Reliable and comfortable. Got us through the toughest trails" )
    review26 = Review.create( carlisting_id: carlisting7.id, user_id: user3.id, rating: 5, body: "Great rig! Reliable and comfortable. Got us through the toughest trails" )
    review27 = Review.create( carlisting_id: carlisting7.id, user_id: user1.id, rating: 5, body: "Great rig! Reliable and comfortable. Got us through the toughest trails" )
    review28 = Review.create( carlisting_id: carlisting7.id, user_id: user4.id, rating: 5, body: "Great rig! Reliable and comfortable. Got us through the toughest trails" )
    
    review29= Review.create( carlisting_id: carlisting8.id, user_id: user5.id, rating: 5, body: "Great rig! Reliable and comfortable. Got us through the toughest trails" )
    review30 = Review.create( carlisting_id: carlisting8.id, user_id: user1.id, rating: 5, body: "Great rig! Reliable and comfortable. Got us through the toughest trails" )
    review31 = Review.create( carlisting_id: carlisting8.id, user_id: user6.id, rating: 5, body: "Great rig! Reliable and comfortable. Got us through the toughest trails" )
    review32 = Review.create( carlisting_id: carlisting8.id, user_id: user7.id, rating: 5, body: "Great rig! Reliable and comfortable. Got us through the toughest trails" )

    review33 = Review.create( carlisting_id: carlisting9.id, user_id: user1.id, rating: 5, body: "Great rig! Reliable and comfortable. Got us through the toughest trails" )
    review34 = Review.create( carlisting_id: carlisting9.id, user_id: user8.id, rating: 5, body: "Great rig! Reliable and comfortable. Got us through the toughest trails" )
    review35 = Review.create( carlisting_id: carlisting9.id, user_id: user9.id, rating: 5, body: "Great rig! Reliable and comfortable. Got us through the toughest trails" )
    review36 = Review.create( carlisting_id: carlisting9.id, user_id: user10.id, rating: 5, body: "Great rig! Reliable and comfortable. Got us through the toughest trails" )

    review37 = Review.create( carlisting_id: carlisting10.id, user_id: user11.id, rating: 5, body: "Great rig! Reliable and comfortable. Got us through the toughest trails" )
    review38 = Review.create( carlisting_id: carlisting10.id, user_id: user1.id, rating: 5, body: "Great rig! Reliable and comfortable. Got us through the toughest trails" )
    review39 = Review.create( carlisting_id: carlisting10.id, user_id: user12.id, rating: 5, body: "Great rig! Reliable and comfortable. Got us through the toughest trails" )
    review40 = Review.create( carlisting_id: carlisting10.id, user_id: user2.id, rating: 5, body: "Great rig! Reliable and comfortable. Got us through the toughest trails" )



# Bookings

    Booking.destroy_all

    booking1 = Booking.create(
        car_id: carlisting1.id,
        user_id: user1.id,
        pickup_date: "2021-10-02",
        dropoff_date: "2021-10-06",
    )

    booking2 = Booking.create(
        car_id: carlisting2.id,
        user_id: user1.id,
        pickup_date: "2021-10-12",
        dropoff_date: "2021-10-22",
    )

    booking3 = Booking.create(
        car_id: carlisting2.id,
        user_id: user1.id,
        pickup_date: "2021-12-10",
        dropoff_date: "2021-12-18",
    )

    booking4 = Booking.create(
        car_id: carlisting3.id,
        user_id: user1.id,
        pickup_date: "2022/01/8",
        dropoff_date: "2022-01-16",
    )

# Trips

    Trip.destroy_all

    trip1 = Trip.create(
        car_id: carlisting1.id,
        beg_latitude: 40.32346726622586,
        beg_longitude: -123.45476453385291,
        end_latitude: 39.54836769514067, 
        end_longitude: -122.93034320873123
    )

    trip2 = Trip.create(
        car_id: carlisting2.id,
        beg_latitude: 33.29323590749055, 
        beg_longitude: -116.2944486247422,
        end_latitude: 32.84604967992147, 
        end_longitude: -116.13611808031065
    )

    trip3 = Trip.create(
        car_id: carlisting3.id,
        beg_latitude: 34.09744659748528, 
        beg_longitude: -116.26393192333315,
        end_latitude: 33.93320641271985,
        end_longitude:  -115.84227861470613
    )

    trip4 = Trip.create(
        car_id: carlisting4.id,
        beg_latitude: 38.61669106389657, 
        beg_longitude: -109.61958587949343,
        end_latitude: 38.801278010384074, 
        end_longitude: -109.6587246718213
    )


    trip5 = Trip.create(
        car_id: carlisting5.id,
        beg_latitude: 35.25948924273898, 
        beg_longitude: -116.05338729067482,
        end_latitude: 34.28631927133447, 
        end_longitude: -115.82427662881659
    )

    trip6 = Trip.create(
        car_id: carlisting6.id,
        beg_latitude: 38.11365203642892,
        beg_longitude:  -111.33413572032455,
        end_latitude: 38.78120085835425, 
        end_longitude: -109.59679857496644
    )


    trip7 = Trip.create(
        car_id: carlisting7.id,
        beg_latitude: 38.032277571593056, 
        beg_longitude: -110.55793330005336,
        end_latitude: 37.79778934689234, 
        end_longitude: -108.95877232271852
    )

    trip8 = Trip.create(
        car_id: carlisting8.id,
        beg_latitude: 31.877732432947678, 
        beg_longitude: -116.58129196939558,
        end_latitude: 29.70254687077005, 
        end_longitude: -115.4936454783648
    )

    trip9 = Trip.create(
        car_id: carlisting9.id,
        beg_latitude: 36.35681931447742, 
        beg_longitude: -117.54166753569115,
        end_latitude: 35.12229036130554, 
        end_longitude: -115.56434896584564
    )


    trip10 = Trip.create(
        car_id: carlisting10.id,
        beg_latitude: 38.7777056067971, 
        beg_longitude: -119.33682740403292,
        end_latitude: 38.3029357811463, 
        end_longitude: -118.60074341515349
    )