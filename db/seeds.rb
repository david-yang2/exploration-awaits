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
        username: "Emma",
        email: "Emma@test.com",
        password: "Emma123"
    )

    user2 = User.create(
        username: "Asta",
        email: "Asta@test.com",
        password: "Asta123"
    )
    user3 = User.create(
        username: "Yuno",
        email: "Yuno@test.com",
        password: "Yuno123"
    )


#Carlisting
    Carlisting.destroy_all

    carlisting1 = Carlisting.create(
        owner_id: user1.id,
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
        longitude: 37.781051952305376, 
        latitude: -122.46593720078,
        location: "San Francisco"
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
        longitude: 37.76331046346102,
        latitude: -122.4540067359941,
        location: "San Francisco"
    )


    carlisting3 = Carlisting.create(
        owner_id: user2.id,
        year: 2018, 
        make: "Jeep", 
        model: "Renegade", 
        price: "150", 
        cartype: "SUV",
        drivetrain: "4WD",
        transmission: "Automatic", 
        tripcapacity: 350, 
        seats: 5, 
        sleeps: 3, 
        lockers: "none", 
        rooftoptent: true,
        shower: true, 
        kitchenset: true, 
        fridge: true, 
        longitude: 37.72427658028534, 
        latitude: -122.47031456683854,
        location: "San Francisco"
    )

# Reviews

    review1 = Review.create(
        carlisting_id: carlisting1.id,
        user_id: user1.id,
        body: "Great rig! Reliable and comfortable. Got us through the toughest trails",
        rating: 5
    )
