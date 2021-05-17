class Carlisting < ApplicationRecord
    has_many :trips,
        primary_key: :id,
        foreign_key: :carlisting_id,
        class_name: :Trip
    
    has_many(:reviews, {
        primary_key: :id,
        foreign_key: :carlisting_id,
        class_name: :Review
    })
    
    belongs_to :user,
        primary_key: :id,
        foreign_key: :owner_id,
        class_name: :User
end