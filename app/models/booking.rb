class Booking < ApplicationRecord
    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User
    
    # has_one :carlisting,
    #     primary_key: :id,
    #     foreign_key: :user_id,
    #     class_name: :Carlisting
end