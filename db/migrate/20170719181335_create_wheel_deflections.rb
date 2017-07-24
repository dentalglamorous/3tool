class CreateWheelDeflections < ActiveRecord::Migration[5.1]
  def change
    create_table :wheel_deflections do |t|
      t.string :name
      t.text :description
      t.decimal :tire_width
      t.string :tire_width_unit
      t.decimal :compression_modulus
      t.string :compression_modulus_unit
      t.decimal :load_on_wheel
      t.string :load_on_wheel_unit
      t.decimal :outside_radius
      t.string :outside_radius_unit
      t.decimal :tread_thicknes
      t.string :tread_thickness_unit

      t.timestamps
    end
  end
end
