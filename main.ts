from microbit import *
import music

# Koble til GroveSynth
# Data pin til P0, Clock pin til P1
data_pin = pin0
clock_pin = pin1

def grove_synth_command(data_pin, clock_pin, command):
    """
        Send en kommando til GroveSynth-modulen via GPIO.
            """
                for bit in range(8):
                        if command & (1 << (7 - bit)):
                                    data_pin.write_digital(1)
                                            else:
                                                        data_pin.write_digital(0)
                                                                clock_pin.write_digital(1)
                                                                        clock_pin.write_digital(0)

                                                                        # Eksempel på å sende en kommando for å spille en tone
                                                                        def play_tone(note):
                                                                            # Kommando for å spille av en tone (enkel representasjon)
                                                                                # Dette må tilpasses basert på GroveSynths spesifikasjoner
                                                                                    command = 0x90  # Kommando for å spille en tone (hypotetisk)
                                                                                        grove_synth_command(data_pin, clock_pin, command)
                                                                                            grove_synth_command(data_pin, clock_pin, note)

                                                                                            while True:
                                                                                                if button_a.is_pressed():
                                                                                                        play_tone(60)  # Spiller C4-tone (Midi-note 60)
                                                                                                                sleep(500)
                                                                                                                    if button_b.is_pressed():
                                                                                                                            play_tone(62)  # Spiller D4-tone (Midi-note 62)
                                                                                                                                    sleep(500)