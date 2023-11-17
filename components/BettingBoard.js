import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const BettingBoard = ({ onBetPlaced, onBetSet }) => {
  const [selectedBet, setSelectedBet] = useState(null);

  const betTypes = [
    { label: "Red", value: "red" },
    { label: "Black", value: "black" },
    { label: "Odd", value: "odd" },
    { label: "Even", value: "even" },
    { label: "1 to 18", value: "1-18" },
    { label: "19 to 36", value: "19-36" },
  ];

  const handleBetSelection = (betType) => {
    setSelectedBet(betType);
    onBetPlaced(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Place Your Bet</Text>
      <View style={styles.grid}>
        {betTypes.map((betType) => (
          <TouchableOpacity
            key={betType.value}
            style={[
              styles.betButton,
              selectedBet === betType.value && styles.selectedBetButton,
            ]}
            onPress={() => {
              handleBetSelection(betType.value);
              onBetSet(betType.value);
            }}
            activeOpacity={1}
          >
            <Text style={styles.betButtonText}>{betType.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "green",
    borderRadius: 5,
  },
  betButton: {
    width: 100,
    height: 50,
    borderWidth: 1,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    backgroundColor: "#a99134",
    borderRadius: 5,
  },
  selectedBetButton: {
    backgroundColor: "gray",
  },
  betButtonText: {
    fontSize: 16,
    color: 'white',
  },
});

export default BettingBoard;
