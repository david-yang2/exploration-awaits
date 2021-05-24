class Booking < ApplicationRecord
    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User
    
    belongs_to( :carlisting,{
        primary_key: :id,
        foreign_key: :car_id,
        class_name: :Carlisting
    })
end