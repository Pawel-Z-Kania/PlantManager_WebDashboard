
export interface PotAlertItem {
    code: string,
    label: string,
    severity: string,
    icon: string
}

export interface PotMeasurement {
    sensor_value: number
}

export interface Pot {
    id: string,
    name: string,
    board_id: string,
    plant_type: string,
    last_signal_time: string,
    last_watered_at: string,
    next_watered_date: string,
    dry_calibration_value: number,
    wet_calibration_value: number,
    battery_mv: number,
    interval_minutes: number,
    pot_measurements: PotMeasurement[],
    alerts: PotAlertItem[]
}

